import { GetCourseService } from './get-course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GetCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
