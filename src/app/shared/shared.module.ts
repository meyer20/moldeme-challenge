import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { SidenavContentModule } from './sidenav-content/sidenav-content.module';
import { SufixPipe } from './pipes/sufix.pipe';
import localeBR from '@angular/common/locales/pt';
registerLocaleData(localeBR);

@NgModule({
  imports: [
    CommonModule,
    SidenavContentModule
  ],
  exports: [SufixPipe],
  declarations: [SufixPipe],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
  ]
})
export class SharedModule { }
