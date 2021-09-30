import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  constructor() {}

  @Output() countDown = new EventEmitter<number>();
  count: number = 0;
  timer;

  ngOnInit(): void {}

  onStart() {
    this.timer = setInterval(() => {
      this.countDown.emit(this.count);
      this.count++;
    }, 1000);
  }

  onStop(timer) {
    clearInterval(timer);
  }
}
