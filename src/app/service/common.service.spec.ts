import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('GetUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });
});
