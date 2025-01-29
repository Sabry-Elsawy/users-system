import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }
  getAllusers():Observable<any>{
    return this._HttpClient.get('https://dummyjson.com/users')
  }
  deleteUser(id:number):Observable<any>{
    return this._HttpClient.delete(`https://dummyjson.com/users/${id}`)
  }
}
