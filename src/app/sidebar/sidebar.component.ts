import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
constructor(private _Router:Router){}
  userName:string | null=localStorage.getItem('userName')?localStorage.getItem('userName'):'No Name';
  image:string | null=localStorage.getItem('image')?localStorage.getItem('image'):'../../assets/images/pexels-photo-2379004 1.png';
  
  
  logOut(){
    localStorage.removeItem('userToken')
    localStorage.removeItem('userName')
    localStorage.removeItem('image')
    this._Router.navigate(['/login'])
  }
}
