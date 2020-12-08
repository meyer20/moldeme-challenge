import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FactoryListComponent } from './factory-list/factory-list.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    FactoryListComponent,
    HeaderComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    ReactiveFormsModule
  ],
  exports: [
    FactoryListComponent,
    HeaderComponent,
    LoginComponent,
    NotFoundComponent
  ]
})
export class ComponentsModule { }
