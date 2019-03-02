import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle = 'project-angular';
  open = false;
  title = 'app';

  toggle(event) {
    console.log(event);
    this.open = event.detail;
  }
}
