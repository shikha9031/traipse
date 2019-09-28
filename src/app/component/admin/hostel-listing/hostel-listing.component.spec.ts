import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelListingComponent } from './hostel-listing.component';

describe('HostelListingComponent', () => {
  let component: HostelListingComponent;
  let fixture: ComponentFixture<HostelListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
