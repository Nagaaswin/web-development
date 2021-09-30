import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'course-pratice-project';

  selectedHeader = 'recipes';

  assignSelectedHeader(header: string) {
    this.selectedHeader = header;
  }
}
