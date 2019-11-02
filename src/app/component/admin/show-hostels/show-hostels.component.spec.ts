import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHostelsComponent } from './show-hostels.component';

describe('ShowHostelsComponent', () => {
  let component: ShowHostelsComponent;
  let fixture: ComponentFixture<ShowHostelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHostelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
