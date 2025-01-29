import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  errorMessage: string = '';
  isLoading: boolean = false;
  isShow: boolean = false;

  singinForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
  });

  onlogin(data: FormGroup) {
   // console.log(data.value);
    this.isLoading = true;
    this._AuthService.signin(data.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('userToken', response.accessToken);
        localStorage.setItem(
          'userName',
          `${response.firstName} ${response.lastName}`
        );
        localStorage.setItem('image', response.image);
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        this.isLoading = false;
      },
      complete: () => {
        console.log('ok');
        this._Router.navigate(['/home']);
      },
    });
  }
}
