import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../../services/services.module';
import { SharedModule } from '../../shared/shared.module';

import { CreateFabricComponent } from './create-fabric.component';
import { SidenavContentModule } from '../../shared/sidenav-content/sidenav-content.module';

@NgModule({
  declarations: [CreateFabricComponent],
  imports: [
    CommonModule,
    ServicesModule,
    ReactiveFormsModule,
    SharedModule,
    SidenavContentModule
  ],
  exports: [CreateFabricComponent]
})
export class CreateFabricModule { }
