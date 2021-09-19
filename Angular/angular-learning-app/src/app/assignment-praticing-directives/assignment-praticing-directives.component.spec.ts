import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentPraticingDirectivesComponent } from './assignment-praticing-directives.component';

describe('AssignmentPraticingDirectivesComponent', () => {
  let component: AssignmentPraticingDirectivesComponent;
  let fixture: ComponentFixture<AssignmentPraticingDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentPraticingDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentPraticingDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
