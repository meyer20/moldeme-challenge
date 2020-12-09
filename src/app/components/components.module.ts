import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesModule } from '../services/services.module';
import { FactoryListModule } from './factory-list/factory-list.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    ReactiveFormsModule,
    FactoryListModule
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    NotFoundComponent
  ]
})
export class ComponentsModule { }
