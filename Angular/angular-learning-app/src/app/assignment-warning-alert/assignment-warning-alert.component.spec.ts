import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentWarningAlertComponent } from './assignment-warning-alert.component';

describe('AssignmentWarningAlertComponent', () => {
  let component: AssignmentWarningAlertComponent;
  let fixture: ComponentFixture<AssignmentWarningAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentWarningAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentWarningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
