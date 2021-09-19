import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSuccessAlertComponent } from './assignment-success-alert.component';

describe('AssignmentSuccessAlertComponent', () => {
  let component: AssignmentSuccessAlertComponent;
  let fixture: ComponentFixture<AssignmentSuccessAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentSuccessAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSuccessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
