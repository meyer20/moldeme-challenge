import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavContentComponent } from './sidenav-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidenavContentComponent],
  exports: [SidenavContentComponent]
})
export class SidenavContentModule { }
