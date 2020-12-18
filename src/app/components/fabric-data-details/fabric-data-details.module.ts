import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricDataDetailsComponent } from './fabric-data-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FabricDataDetailsComponent],
  exports: [FabricDataDetailsComponent]
})
export class FabricDataDetailsModule { }
