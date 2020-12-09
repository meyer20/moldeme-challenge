import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryListComponent } from './factory-list.component';
import { ServicesModule } from '../../services/services.module';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  declarations: [FactoryListComponent],
  exports: [FactoryListComponent]
})
export class FactoryListModule { }
