import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMoreDetailsComponent } from './get-more-details.component';

describe('GetMoreDetailsComponent', () => {
  let component: GetMoreDetailsComponent;
  let fixture: ComponentFixture<GetMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
