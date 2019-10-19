import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpApi } from "../models/http.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(
        private _http: HttpClient,
    ) { }
    
    AutenticarUsuario(user: any): Observable<any> {
        var body = JSON.stringify(user)
        var headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.post(HttpApi+'autenticacion/obtener', body, {headers: headers})
    }
}