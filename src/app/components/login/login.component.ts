import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginRequest } from '../../domain/classes/login/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.loginForm.touched && this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe(data => {
        console.log('data', data);
      });
    }
  }
}
