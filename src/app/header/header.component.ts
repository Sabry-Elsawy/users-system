import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
   
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 constructor(private _SidebarService:SidebarService){}

 isOpen=true;

 toggleSidebar() {
  this._SidebarService.toggleSidebar();
  this.isOpen=!this.isOpen;
}


}
