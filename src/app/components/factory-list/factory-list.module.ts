import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxYazuoSidenavModule } from 'ngx-yazuo-sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../../services/services.module';
import { CreateFabricModule } from '../create-fabric/create-fabric.module';

import { FactoryListComponent } from './factory-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgxYazuoSidenavModule.forRoot(),
    CreateFabricModule,
    MatPaginatorModule
  ],
  declarations: [FactoryListComponent],
  exports: [FactoryListComponent]
})
export class FactoryListModule { }
