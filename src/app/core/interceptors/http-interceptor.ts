import { HttpEvent, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


export const httpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  // Token retrieval logic
  const authToken = localStorage.getItem('authToken') || '';

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: authToken ? `Bearer ${authToken}` : '',
      'Content-Type': 'application/json'
    }
  });



  return next(authReq).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log('Response:', event.type, event.url);
      }
    }),
    catchError((error: any) => {
      if (error instanceof ErrorEvent) {
        console.error('Client-side error occurred:', error.message);
      } else {
        console.error('Backend returned code ${error.status}, body was:', error.message);
      }

      // Handle token expiration or invalid token
      if (error.status === 401) {
        // Perform logout action or redirect to login page
        console.log('Unauthorized access. Redirecting to login...');
        // window.location.href = '/login';
      }

      return throwError(() => error);
    })
  );
};
