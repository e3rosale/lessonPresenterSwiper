import { Component, AfterViewInit } from '@angular/core';
import { FetchPowerPointService } from './fetch-power-point.service';
import { Subscription } from 'rxjs/Subscription';

@Component ({
    selector: 'swiper-viewer',
    templateUrl: './swiperView.component.html',
    styleUrls: ['./swiperView.component.css']
  })

export class SwiperViewer implements AfterViewInit {
  public mySwiper : any;
  public current_lesson : any;
  public lessonSubscription : Subscription;
  public slideSubscription : Subscription;

  constructor(public fetchPowerPointService : FetchPowerPointService) {}

  ngOnInit() {
    // subscribe to lesson subject in service
    this.lessonSubscription = this.fetchPowerPointService.lessonSubject.subscribe((lessonIndex) => {
      this.current_lesson = this.fetchPowerPointService.getLesson(lessonIndex);

      setTimeout(() => {
        this.mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: false,
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })  
      }, 0); 
    });

    this.slideSubscription = this.fetchPowerPointService.slideSubject.subscribe((slideIndex) => {
      this.mySwiper.slideTo(slideIndex, 1000, false); 
    });
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })    
  }

}
  

