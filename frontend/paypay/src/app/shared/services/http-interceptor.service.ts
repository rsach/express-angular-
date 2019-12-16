import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone({
      url: `${environment.url}/${req.url}`
    });
    return next.handle(request).pipe(tap((res: any) => {
      console.log(res)
      if (res.body && (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE')) {
        this.snackbar.open(res.body.message, 'Ok', {
          duration:  5000
        });

      }
    }));
  }
}
