import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log(req);
    
    // req = req.clone({headers: req.headers.append('Content-Type', 'application/json')});
    // req = req.clone({headers: req.headers.append('Access-Control-Allow-Origin', '*')});
    // req = req.clone({setHeaders: {'Content-Type':'application/x-www-form-urlencoded'}});


    return next.handle(req);
  };

}