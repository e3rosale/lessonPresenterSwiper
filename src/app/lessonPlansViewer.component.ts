import { Component } from '@angular/core';
import { FetchPowerPointService } from './fetch-power-point.service';

@Component({
  selector: "lesson-plan-viewer",
  templateUrl: './lessonPlansViewer.component.html',
  styleUrls: ['./lessonPlansViewer.component.css']
})

export class LessonPlansViewerComponent {
  public userLessonPlans : any;

  constructor(public fetchPowerPointService : FetchPowerPointService) {
    this.userLessonPlans = fetchPowerPointService.getUserLessons();
  }

  selectLesson(index : number) {
    this.fetchPowerPointService.selectLesson(index);
  }
}