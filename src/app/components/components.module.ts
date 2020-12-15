import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ServicesModule } from '../services/services.module';
import { FactoryListModule } from './factory-list/factory-list.module';
import { CreateFabricModule } from './create-fabric/create-fabric.module';
import { LoginModule } from './login/login.module';
import { FabricDataDetailsModule } from './fabric-data-details/fabric-data-details.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    ReactiveFormsModule,
    FactoryListModule,
    CreateFabricModule,
    LoginModule,
    FabricDataDetailsModule,
    NotFoundModule,
    HeaderModule
  ]
})
export class ComponentsModule { }
