import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('auth_token')) {
      request = request.clone({
        setHeaders: {
          Authorization: localStorage.getItem('auth_token')
        }
      });
    }

    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      return event;
    }), catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        this.loginService.logout();
      }

      return throwError(err);
    }));
  }
}
