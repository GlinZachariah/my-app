import { GetCourseService } from './../get-course.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Services } from '@angular/core/src/view';

export interface IfFav {
  isFavourite: boolean;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent  {
  @Input() isFavourite: boolean;
  @Output() change = new EventEmitter();
   isActive = true;
   mytitle = 'Hello Glin';
   width = 50;
   url = 'http://pngimg.com/uploads/lion/lion_PNG23268.png';
   courses;
   newText = 'Success';
   value = ' ';
   changeText() {
    console.log( 'Key Binded value: ' + this.value);
   }

   onClick() {
     this.isFavourite = !(this.isFavourite);
     this.change.emit({newVal : this.isFavourite});
     console.log(' Button clicked');
   }
  constructor(service: GetCourseService) {
    this.courses = service.getCourse();
  }
}
