import { TestBed } from '@angular/core/testing';

import { ClockService } from './clock.service';

describe('TimeService', () => {
  let service: ClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
