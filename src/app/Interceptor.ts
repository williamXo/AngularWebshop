import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'http://167.99.215.253:8080';
    req = req.clone({
      url: url + req.url
    });
    return next.handle(req);
  }
}

