import { GetCourseService } from './../get-course.service';
import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {
   mytitle= 'Hello Glin';
   courses;
  constructor(service: GetCourseService) {
    this.courses = service.getCourse();
  }



}
