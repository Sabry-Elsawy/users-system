import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  isSidebarOpen = true;
 constructor(private _SidebarService:SidebarService){}

 ngOnInit() {
  this._SidebarService.sidebarOpen$.subscribe(isOpen => {
    this.isSidebarOpen = isOpen;
  });
}

}
