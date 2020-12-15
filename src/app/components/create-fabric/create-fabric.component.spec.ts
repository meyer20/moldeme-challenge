import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFabricComponent } from './create-fabric.component';

describe('CreateFabricComponent', () => {
  let component: CreateFabricComponent;
  let fixture: ComponentFixture<CreateFabricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
