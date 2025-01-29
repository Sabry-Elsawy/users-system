import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor(private _HttpClient:HttpClient) { }

  getUserById(id:number):Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/users/${id}`)
  }

  editOnUser(id:number,data:FormGroup):Observable<any>{
    return this._HttpClient.put(`https://dummyjson.com/users/${id}`,data)
  }
}
