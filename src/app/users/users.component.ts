import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../users';
  
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
constructor(private _UsersService:UsersService){}
ngOnInit(): void {
  this.getAllUsers()
}
usersList:Users[]=[]
 
getAllUsers(){
  this._UsersService.getAllUsers().subscribe({
    next:(response)=>{
      console.log(response);
      this.usersList=response.users
   
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

 
}
