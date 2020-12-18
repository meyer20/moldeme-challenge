import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryListComponent } from './factory-list.component';
import { ServicesModule } from '../../services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxYazuoSidenavModule } from 'ngx-yazuo-sidenav';
import { CreateFabricModule } from '../create-fabric/create-fabric.module';
import { SharedModule } from '../../shared/shared.module';
import { FabricDataDetailsModule } from '../fabric-data-details/fabric-data-details.module';

describe('FactoryListComponent', () => {
  let component: FactoryListComponent;
  let fixture: ComponentFixture<FactoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ServicesModule,
        BrowserAnimationsModule,
        NgxYazuoSidenavModule.forRoot(),
        CreateFabricModule,
        SharedModule,
        FabricDataDetailsModule
      ],
      declarations: [ FactoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
