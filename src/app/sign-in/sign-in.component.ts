import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private _AuthService: AuthService, private _Router: Router , private _ToastrService:ToastrService) {}

  errorMessage = '';
  isLoading = false;
  isShow = false;

  singinForm = new FormGroup({
    username: new FormControl(null,[Validators.required]),
    password: new FormControl(null , Validators.required),
  });

  onlogin(data: FormGroup) {
   // console.log(data.value);
    this.isLoading = true;
    this._AuthService.signin(data.value).subscribe({
      next: (response) => {
      //  console.log(response);
        localStorage.setItem('userToken', response.accessToken);
        localStorage.setItem(
          'userName',
          `${response.firstName} ${response.lastName}`
        );
        localStorage.setItem('image', response.image);
      
        this.isLoading = false;
      },
      error: (err) => {
      //  console.log(err.error.message);
        this.errorMessage = err.error.message;
        this.isLoading = false;
         this._ToastrService.error(this.errorMessage);
        
      },
      complete: () => {
        console.log('ok');
        this._ToastrService.success('Login successful! Welcome back ' , '', {
          timeOut: 2000,
        });
     
        this._Router.navigate(['/home']);
      },
    });
  }
}
