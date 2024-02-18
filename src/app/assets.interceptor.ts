import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AssetsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('/assets')) {
      // Ajusta la URL como sea necesario
      const newUrl = request.url.replace('/assets', 'http://deportivo2.edbsharks.com/assets');
      const modifiedRequest = request.clone({ url: newUrl });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
