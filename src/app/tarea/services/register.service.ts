import { environment } from './../../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { User } from '../interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor() { }

  http = inject(HttpClient)

}
