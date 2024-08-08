import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'' , redirectTo:'login' , pathMatch:'full'},
  {path:'login' ,  component:SignInComponent},
  {path:'home' ,  canActivate:[authGuard], component:HomeComponent,
    children:[
      {path:'' , redirectTo:'users' , pathMatch:'full'},
      {path:'users' ,  canActivate:[authGuard], component:UsersComponent},
      {path:'adduser' ,  canActivate:[authGuard], component:AdduserComponent},
      {path:'profile' ,  canActivate:[authGuard], component:ProfileComponent},
      {path:'**' ,   component:NotFoundComponent}
    ]
  },
 
  {path:'**' ,   component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
