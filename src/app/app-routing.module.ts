import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './guards/auth.guard';
 

const routes: Routes = [
  {path:'' , redirectTo:"login" , pathMatch:"full"},
  {path:"login" , component:SignInComponent},
  {path:"home"  ,canActivate:[authGuard], component:HomeComponent, children:[
    {path:'' , redirectTo:"users" , pathMatch:"full"},
    {path:"users" , component:UsersComponent},
    {path:"Add-user" , component:AddUserComponent},
    {path:"edit-user/:id" , component:AddUserComponent},
    {path:"profile" , component:ProfileComponent},
    {path:"**" , component:NotfoundComponent}
  ]},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
