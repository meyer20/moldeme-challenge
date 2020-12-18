import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginService } from './login.service';
import { FabricService } from './fabric.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    LoginService,
    FabricService,
    MatSnackBar
  ]
})
export class ServicesModule { }
