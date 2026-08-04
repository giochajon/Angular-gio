import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
