import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
   
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 constructor(private _SidebarService:SidebarService){
 
 }
 searchKey: string = '';
 isOpen=true;
 @Output() newItemEvent = new EventEmitter<string>();

 
    onSearch(value:string){
      this.newItemEvent.emit(value);
    }
 

 toggleSidebar() {
  this._SidebarService.toggleSidebar();
  this.isOpen=!this.isOpen;
}


}
