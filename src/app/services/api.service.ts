import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    constructor( private http: HttpClient,
        private router: Router) { }

    countRetry = 0;
    headersConfig = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    getProducts(): Observable<any> {
        let url = `https://fakestoreapi.com/products/`;
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return this.http.get(url,{headers:headers})
    }

    putProducts(path: string, body: Object = {}): Observable<any> {
        let url = `https://fakestoreapi.com/products/`;
        return this.http
            .put(url, JSON.stringify(body), {
                headers: this.headersConfig,
            })
    }

    patchProducts(path: string, body: Object = {}): Observable<any> {
        let url = `https://fakestoreapi.com/products/`
        return this.http
            .patch(url, JSON.stringify(body), {
                headers: this.headersConfig,
            })
    }

    postProducts(path: string, body: Object = {}): Observable<any> {
        let url = `https://fakestoreapi.com/products/`
        return this.http
            .post(url, JSON.stringify(body), {
                headers: this.headersConfig,
            })
    }

}
