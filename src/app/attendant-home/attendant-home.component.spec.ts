import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantHomeComponent } from './attendant-home.component';

describe('AttendantHomeComponent', () => {
  let component: AttendantHomeComponent;
  let fixture: ComponentFixture<AttendantHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendantHomeComponent]
    });
    fixture = TestBed.createComponent(AttendantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
