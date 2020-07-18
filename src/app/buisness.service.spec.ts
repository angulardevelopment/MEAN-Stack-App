import { TestBed } from '@angular/core/testing';

import { BuisnessService } from './buisness.service';

describe('BuisnessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuisnessService = TestBed.get(BuisnessService);
    expect(service).toBeTruthy();
  });
});
