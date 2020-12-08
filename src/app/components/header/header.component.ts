import { Component, OnInit } from '@angular/core';
import { UserStore } from '../../stores/user.store';
import { User } from '../../domain/classes/login/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private userStore: UserStore, private loginService: LoginService) { }

  ngOnInit(): void {
    this.userStore.user$.subscribe((userData: User) => {
      this.currentUser = userData;
    });
  }

  logout() {
    this.loginService.logout();
  }
}
