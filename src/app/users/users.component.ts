import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../inerface/users';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private _UsersService: UsersService , private _ToastrService:ToastrService) {}

  usersList: Users[] = [];
  dataFromChildToSearch:string='';

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._UsersService.getAllusers().subscribe({
      next: (response) => {
        //  console.log(response.users);
        this.usersList = response.users;
        //   console.log(this.usersList);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('ok');
      },
    });
  }

  deleteUser(id: number) {
    this._UsersService.deleteUser(id).subscribe({
      next: (responce) => {
        // console.log(responce);
      },
      error: (err) => {
        //console.log(err);
        this._ToastrService.error('user delete' , 'Faild!')
      },
      complete: () => {
        //  console.log("ok");
        this.getAllUsers();
        this._ToastrService.success('user delete', 'Success!' , {
          timeOut:2000
        });
      },
    });
  }
}
