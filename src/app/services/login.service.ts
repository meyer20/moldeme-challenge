import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginRequest } from '../domain/classes/login/login-request';
import { LoginResponse } from '../domain/classes/login/login-response';
import { environment } from '../../environments/environment';
import { UserStore } from '../stores/user.store';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private userStore: UserStore,
              private router: Router,
              private localStorageService: LocalStorageService) { }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post(`${environment.endpointURL}/login`, data).pipe(map((userData: LoginResponse) => {
      this.localStorageService.setUser(userData.user);
      this.localStorageService.setToken(userData.auth_token);
      this.router.navigate(['']);
      return userData;
    }));
  }

  logout() {
    this.localStorageService.clearLocalStorage();
    this.router.navigate(['/login']);
  }
}
