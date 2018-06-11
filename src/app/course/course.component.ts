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
   isActive=true;
   url='http://pngimg.com/uploads/lion/lion_PNG23268.png';
   courses;
   newText='Success';
   changeText(){
     console.log("Key Binded success");
   }

   onClick($event){
     $event.stopPropogation;
     console.log("Button clicked");
   }
  constructor(service: GetCourseService) {
    this.courses = service.getCourse();
  }



}
