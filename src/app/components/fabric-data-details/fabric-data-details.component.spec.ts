import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricDataDetailsComponent } from './fabric-data-details.component';

describe('FabricDataDetailsComponent', () => {
  let component: FabricDataDetailsComponent;
  let fixture: ComponentFixture<FabricDataDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricDataDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
