import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.url);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const cloneHeader = req.clone({ headers })
    const url = `${environment.URL}${req.url}`;
    const cloneURL = cloneHeader.clone({ url: url })
    console.log(url);
    return next.handle(cloneURL);
  }
}
