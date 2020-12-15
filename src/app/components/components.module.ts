import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesModule } from '../services/services.module';
import { FactoryListModule } from './factory-list/factory-list.module';
import { CreateFabricModule } from './create-fabric/create-fabric.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    ReactiveFormsModule,
    FactoryListModule,
    CreateFabricModule,
    LoginModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent
  ]
})
export class ComponentsModule { }
