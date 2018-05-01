import { Component, Output, EventEmitter } from '@angular/core';
import { FetchPowerPointService } from './fetch-power-point.service';
import { Subscription } from 'rxjs/Subscription';


@Component ({
  selector: 'slide-viewer',
  templateUrl: './slideViewer.component.html',
  styleUrls: ['./slideViewer.component.css']
})

export class SlideViewerComponent {
  public powerPointPresentation : any = [];
  public lessonSubscription : Subscription; 

  constructor(public fetchPowerPointService : FetchPowerPointService) {}

  ngOnInit() {
    this.lessonSubscription = this.fetchPowerPointService.lessonSubject.subscribe(index => {
      this.powerPointPresentation = this.fetchPowerPointService.getLesson(index);  
      this.fetchPowerPointService.selectSlide(0);
    });
    this.powerPointPresentation = this.fetchPowerPointService.getLesson(0);  
  }

  ngOnDestroy() {
    this.lessonSubscription.unsubscribe();
  }

  selectSlide(slide: any, slideIndex: number) {
    console.log("The index value of this slide is: " + slideIndex);
    this.fetchPowerPointService.selectSlide(slideIndex);
  }
}
