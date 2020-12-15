import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../../services/services.module';
import { SharedModule } from '../../shared/shared.module';

import { CreateFabricComponent } from './create-fabric.component';
import { SidenavContentModule } from '../../shared/sidenav-content/sidenav-content.module';
import { FabricDataDetailsModule } from '../fabric-data-details/fabric-data-details.module';

@NgModule({
  declarations: [CreateFabricComponent],
  imports: [
    CommonModule,
    ServicesModule,
    ReactiveFormsModule,
    SharedModule,
    SidenavContentModule,
    FabricDataDetailsModule
  ],
  exports: [CreateFabricComponent]
})
export class CreateFabricModule { }
