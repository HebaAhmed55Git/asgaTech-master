import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor() {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Passed through the interceptor in request");

    return next.handle(request)
        .pipe(
            map(res => {
                console.log("Passed through the interceptor in response");
                return res
            }),
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    console.log('This is client side error');
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    console.log('This is server side error');
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                }
                console.log(errorMsg);
                return throwError(errorMsg);
            })
        )
}
}
