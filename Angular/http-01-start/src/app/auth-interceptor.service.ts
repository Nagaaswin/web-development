import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === "GET") {
      const modifiedReq = req.clone({
        headers: req.headers.append("auth", "xyz"),
      });
      return next.handle(modifiedReq).pipe(
        // Intercepting response
        tap((event) => {
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
    }
    return next.handle(req);
  }
}
