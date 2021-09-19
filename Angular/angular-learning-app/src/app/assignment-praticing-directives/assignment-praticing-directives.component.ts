import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-praticing-directives',
  templateUrl: './assignment-praticing-directives.component.html',
  styleUrls: ['./assignment-praticing-directives.component.css'],
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class AssignmentPraticingDirectivesComponent implements OnInit {
  display: boolean = false;
  buttonClicks = [];
  count = 1;

  constructor() {}

  ngOnInit(): void {}

  onDisplayDetails() {
    this.display = this.display === false ? true : false;
    this.buttonClicks.push(this.count++);
  }

  getColor() {
    if (this.buttonClicks.length >= 5) {
      return 'blue';
    }
    return 'transparent';
  }
}
