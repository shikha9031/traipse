import { TestBed } from '@angular/core/testing';

import { CommonLogicService } from './common-logic.service';

describe('CommonLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonLogicService = TestBed.get(CommonLogicService);
    expect(service).toBeTruthy();
  });
});
