import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl='https://dummyjson.com/';
    const token = localStorage.getItem('userToken')
 let newRequest =   request.clone({
      url:baseUrl + request.url,
      setHeaders:{
        'Authorization':`Bearer ${token}`
      }
    })
    return next.handle(newRequest);
  }
}
