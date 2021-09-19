import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-binding',
  templateUrl: './assignment-binding.component.html',
  styleUrls: ['./assignment-binding.component.css'],
})
export class AssignmentBindingComponent implements OnInit {
  userName: String = '';

  constructor() {}

  ngOnInit(): void {}

  checkUserName() {
    if (this.userName != '') {
      return false;
    }
    return true;
  }

  oncheckUserName() {
    this.userName = '';
  }
}
