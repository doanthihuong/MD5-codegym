import { TestBed } from '@angular/core/testing';

import { RoductBeService } from './roduct-be.service';

describe('RoductBeService', () => {
  let service: RoductBeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoductBeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
