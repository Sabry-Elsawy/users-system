import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ProfileComponent } from './profile/profile.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NotFoundComponent,
    HomeComponent,
    SidebarComponent,
    UsersComponent,
    AdduserComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
