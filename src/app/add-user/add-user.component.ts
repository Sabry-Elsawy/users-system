import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddUserService } from '../services/add-user.service';
import { ActivatedRoute } from '@angular/router';
import { EditUserService } from '../services/edit-user.service';
import { Users } from '../inerface/users';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  selectedDate:Date | null =null;
 
  userId:number=0;
 
  userInfo:Users|undefined;
 
constructor(private _AddUserService:AddUserService , private _ActivatedRoute:ActivatedRoute , private _EditUserService:EditUserService , private _ToastrService:ToastrService){}

ngOnInit(): void {
 this.userId= this._ActivatedRoute.snapshot.params['id']
 //console.log(this.userId);
 if(this.userId>0){
  this.getUserById();
 }
}
  userForm= new FormGroup({
    firstName:new FormControl<string | null>(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    lastName:new FormControl<string | null>(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl<string | null>(null,[Validators.required,Validators.email]),
    age:new FormControl<number | null>(null,[Validators.min(16),Validators.max(60)]),
    phone:new FormControl<string | null>(null , [Validators.pattern('^01[0125][0-9]{8}$')]),
    birthDate:new FormControl<Date | null>(null)
  })
  getUserById(){
    this._EditUserService.getUserById(this.userId).subscribe({
      next:(responce)=>{
       // console.log(responce);
        this.userInfo=responce;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('Done');
        this.userForm.patchValue({
          firstName:this.userInfo?.firstName,
          lastName:this.userInfo?.lastName,
          email:this.userInfo?.email,
          age:this.userInfo?.age,
          phone:this.userInfo?.phone,
          birthDate:this.userInfo?.birthDate? new Date(this.userInfo.birthDate) : null
        })
      }
    })
  }
 
  

  onSubmit(data:FormGroup ){
   // console.log(data);
 
   
    if(this.userId){
      this._EditUserService.editOnUser(this.userId , data.value).subscribe({
        next:(responce)=>{
        //  console.log(responce);
          
        },
        error:(err)=>{
          console.log(err);
          this._ToastrService.error('user Updated' , 'Faild!')
        },
        complete:()=>{
          console.log('Done');
          this.userForm.reset();
          this._ToastrService.success('user Updated', 'Success!' , {
            timeOut:2000
          });
          this.userForm.controls['firstName'].setErrors(null);
          this.userForm.controls['lastName'].setErrors(null);
          this.userForm.controls['email'].setErrors(null);
        }
      })
      
    }
    else
    {
      this._AddUserService.addNewUser(data.value).subscribe({
        next:(responce)=>{
        //  console.log(responce);
          
        },
        error:(err)=>{
          console.log(err);
          this._ToastrService.error('user add' , 'Faild!')
        },
        complete:()=>{
          console.log('Done');
          this.userForm.reset();
          this._ToastrService.success('user add', 'Success!' , {
            timeOut:2000
          });
          this.userForm.controls['firstName'].setErrors(null);
          this.userForm.controls['lastName'].setErrors(null);
          this.userForm.controls['email'].setErrors(null);
        }
      })
      
    }
   }
 
  }

 
