import { TestBed } from '@angular/core/testing';

import { HostelListService } from './hostel-list.service';

describe('HostelListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostelListService = TestBed.get(HostelListService);
    expect(service).toBeTruthy();
  });
});
