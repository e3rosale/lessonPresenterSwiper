import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideViewerComponent } from './slideViewer.component';
import { LessonPlansViewerComponent } from './lessonPlansViewer.component';
import { SwiperViewer } from './swiperView.component';




@NgModule({
  declarations: [
    AppComponent,
    SlideViewerComponent,
    LessonPlansViewerComponent,
    SwiperViewer
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
