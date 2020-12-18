import { Injectable } from '@angular/core';

import { User } from '../domain/classes/login/user';
import { UserStore } from '../stores/user.store';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private userStore: UserStore) { }

  setUser(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    this.userStore.setUser(user);
  }

  get userData(): User {
    if (localStorage.getItem('userData')) {
      const user = Object.assign({}, JSON.parse(localStorage.getItem('userData'))) as User;
      this.userStore.setUser(user);
      return user;
    }

    return null;
  }

  setToken(token) {
    localStorage.setItem('auth_token', token);
  }

  clearLocalStorage() {
    localStorage.removeItem('userData');
    localStorage.removeItem('auth_token');
    this.userStore.setUser(null);
  }
}
