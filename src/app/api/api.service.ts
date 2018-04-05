import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private authService: AuthorizationService) {
    }

    private createQueryString(queryParameters: Object): string {
        let queryString = '';
        if (typeof queryParameters === 'string') {
            queryString = '/${queryParameters}';
        }

        if (typeof queryParameters === 'object') {
            for (let key in queryParameters) {
                let value = queryParameters[key];
                let prefix = queryString.length === 0 ? '?' : '&';

                queryString += `${prefix}${key}=${value}`;
            }
        }

        return queryString;
    }

    private createRequestHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        this.authService.restoreAuthorization();
        const authKey = this.authService.createAuthorizationString()
        headers = headers.set('Authorization', authKey);
        return headers;
    }

    private createURI(path: string, queryParameters: Object): string {
      const queryString = this.createQueryString(queryParameters);
        return `/api/${path}${queryString}`;
    }

    public get <T>(path: string, queryParameters?: Object): Observable<T> {
      const uri = this.createURI(path, queryParameters);
      const headers = this.createRequestHeaders();
        return this.http.get<T>(uri, { headers: headers });
    }

    public post<T>(path: string, data: Object, queryParameters?: Object): Observable<T> {
      const uri = this.createURI(path, queryParameters);
      const headers = this.createRequestHeaders();

        return this.http.post<T>(uri, data, {headers: headers});
    }

    public put<T>(path: string, data: Object, queryParameters?: Object): Observable<any> {
      const uri = this.createURI(path, queryParameters);
      const headers = this.createRequestHeaders();
        return this.http.put(uri, data, {headers: headers});
    }

    public delete <T>(path: string, queryParameters?: Object): Observable<any>  {
      const uri = this.createURI(path, queryParameters);
      const headers = this.createRequestHeaders();

        return this.http.delete(uri, {headers: headers});
    }
}
