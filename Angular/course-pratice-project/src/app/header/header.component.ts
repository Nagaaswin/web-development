import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  @Output() selectedHeader = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  selectHeader(header: string) {
    this.selectedHeader.emit(header);
  }
}
