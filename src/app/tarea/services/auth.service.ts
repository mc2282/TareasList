import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  http = inject(HttpClient)

  urlBase = environment.urlBase;
  /*
    getUsuario(id: string): Observable<User> {
    }
    */
}
