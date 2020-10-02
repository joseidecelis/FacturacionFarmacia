import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../dto/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

login(usuario: Usuario): Observable<any> {
  return this.http.post('http://localhost:8000/login', usuario);
}
}
