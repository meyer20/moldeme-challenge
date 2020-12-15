import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxYazuoSidenavModule } from 'ngx-yazuo-sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../../services/services.module';
import { CreateFabricModule } from '../create-fabric/create-fabric.module';

import { FactoryListComponent } from './factory-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../shared/shared.module';
import { FabricDataDetailsModule } from '../fabric-data-details/fabric-data-details.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    BrowserAnimationsModule,
    NgxYazuoSidenavModule.forRoot(),
    CreateFabricModule,
    MatPaginatorModule,
    SharedModule,
    FabricDataDetailsModule
  ],
  declarations: [FactoryListComponent],
  exports: [FactoryListComponent]
})
export class FactoryListModule { }
