import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { FabricService } from './fabric.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    LoginService,
    FabricService
  ]
})
export class ServicesModule { }
