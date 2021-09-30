import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isOddNumber: boolean = true;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  oddOrEven(countDown: number) {
    if (countDown % 2 != 0) {
      this.oddNumbers.push(countDown);
    } else {
      this.evenNumbers.push(countDown);
    }
  }
}
