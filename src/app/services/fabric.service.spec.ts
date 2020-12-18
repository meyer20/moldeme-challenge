import { TestBed } from '@angular/core/testing';

import { FabricService } from './fabric.service';
import { ServicesModule } from './services.module';

describe('FabricService', () => {
  let service: FabricService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule]
    });
    service = TestBed.inject(FabricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
