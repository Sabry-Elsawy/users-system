import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../inerface/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private _UsersService: UsersService) {}

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
      },
      complete: () => {
        //  console.log("ok");
        this.getAllUsers();
      },
    });
  }
}
