import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../inerface/users';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUserInfo:Users|undefined;
constructor(private _UsersService:UsersService){
 // this.getCurrentUser();
}


ngOnInit(): void {
  this.getCurrentUser()
}


getCurrentUser(){
  this._UsersService.getCurrentUser().subscribe({
    next:(responce)=>{
      console.log(responce);
      this.currentUserInfo=responce;
    },
    error:(err)=>{
      console.log(err);
      
    },
    complete:()=>{
      console.log('Done');
      
    }
  })
}

}
