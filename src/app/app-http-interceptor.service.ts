import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } "@angular/common/http";
import { Observable } "rxjs";

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>{
    console.log(req);
    
    return next.handle(req);
  }

}