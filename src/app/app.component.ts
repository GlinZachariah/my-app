import { Component } from '@angular/core';
import { IfFav } from './course/course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isActive = false;

  valueChanged(eventArgs: IfFav) {
    console.log('Output property success: ' + eventArgs);
  }
}
