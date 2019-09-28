import { TestBed } from '@angular/core/testing';

import { GetUrlService } from './get-url.service';

describe('GetUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUrlService = TestBed.get(GetUrlService);
    expect(service).toBeTruthy();
  });
});
