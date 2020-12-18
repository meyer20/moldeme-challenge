import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFabricComponent } from './create-fabric.component';
import { ServicesModule } from '../../services/services.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SidenavContentModule } from '../../shared/sidenav-content/sidenav-content.module';
import { FabricDataDetailsModule } from '../fabric-data-details/fabric-data-details.module';

describe('CreateFabricComponent', () => {
  let component: CreateFabricComponent;
  let fixture: ComponentFixture<CreateFabricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ServicesModule,
        ReactiveFormsModule,
        SharedModule,
        SidenavContentModule,
        FabricDataDetailsModule
      ],
      declarations: [ CreateFabricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
