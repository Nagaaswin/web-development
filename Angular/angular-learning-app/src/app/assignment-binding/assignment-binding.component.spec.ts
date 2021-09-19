import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentBindingComponent } from './assignment-binding.component';

describe('AssignmentBindingComponent', () => {
  let component: AssignmentBindingComponent;
  let fixture: ComponentFixture<AssignmentBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
