 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AddUserService {
 
  constructor(private _HttpClient:HttpClient) { }

  addNewUser(data:FormGroup):Observable<any>{
    return this._HttpClient.post('https://dummyjson.com/users/add',data)
  }

}
