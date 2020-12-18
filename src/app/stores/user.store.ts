import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../domain/classes/login/user';

@Injectable({ providedIn: 'root' })
export class UserStore {
  private user = new BehaviorSubject<User>(null);
  readonly user$ = this.user.asObservable();

  constructor() {}

  setUser(user?) {
    this.user.next(user);
  }

  getUser() {
    return this.user.getValue();
  }
}
