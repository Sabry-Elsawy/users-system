import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
     
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent  {
 constructor(private _AuthService:AuthService ,private _Router:Router){}
 isLoading:boolean=false

signInForm:FormGroup=new FormGroup({
  username:new FormControl(null, [Validators.required]),
  password:new FormControl(null , [Validators.required])
})

onlogin(signInForm: any){
  if (signInForm.valid) {
    this.isLoading=true
    this._AuthService.login(signInForm.value).subscribe({
      next:(response)=>{
        console.log(response);
        localStorage.setItem('userToken' , response.token)
        localStorage.setItem('userName' , `${response.firstName} ${response.lastName}`)
        localStorage.setItem('image' , response.image)
        this._Router.navigate(['/home'])
        this.isLoading=false
        
      },
      error:(err)=>console.log(err)
      
    })
  }
   
  
}


}
