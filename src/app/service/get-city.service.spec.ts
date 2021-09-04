import { TestBed } from '@angular/core/testing';

import { GetCityService } from './get-city.service';

describe('GetCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCityService = TestBed.get(GetCityService);
    expect(service).toBeTruthy();
  });
});
