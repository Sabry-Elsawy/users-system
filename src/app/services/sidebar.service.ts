import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  private sidebarOpen = new BehaviorSubject<boolean>(true); // true تعني أن الشريط الجانبي مفتوح
  sidebarOpen$ = this.sidebarOpen.asObservable();

  toggleSidebar() {
    this.sidebarOpen.next(!this.sidebarOpen.value);
  }
}
