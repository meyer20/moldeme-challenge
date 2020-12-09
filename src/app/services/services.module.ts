import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { FabricService } from './fabric.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    LoginService,
    FabricService
  ]
})
export class ServicesModule { }
