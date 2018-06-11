import { TestBed, inject } from '@angular/core/testing';

import { GetCourseService } from './get-course.service';

describe('GetCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCourseService]
    });
  });

  it('should be created', inject([GetCourseService], (service: GetCourseService) => {
    expect(service).toBeTruthy();
  }));
});
