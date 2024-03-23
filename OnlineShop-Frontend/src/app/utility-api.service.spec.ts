import { TestBed } from '@angular/core/testing';

import { UtilityApiService } from './utility-api.service';

describe('UtilityApiService', () => {
  let service: UtilityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
