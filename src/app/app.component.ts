import { Component, AfterViewInit } from '@angular/core';
import { FetchPowerPointService } from './fetch-power-point.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FetchPowerPointService]
})
export class AppComponent implements AfterViewInit{
  public classroomPanels : number[];
  public rect : string;
  public displayPanelsViewEnabled : boolean;
  public page_scroll_height : string;
  public panelStatus : string;
  
  public slideSubscription : Subscription;  // this slideSubscription will be used to subscribe to the subject (slideSubject).
  public lessonSubscription : Subscription;

  // Current power point presentation slide variables
  public current_slide : {id: number, title: string, path_name: string};
  // {"id": 0, "title": "Case Study", "path_name": "assets/powerpoints/Uber/slide_1.png"}
  // public powerPointPresentation: Array<{id : number, title : string, path_name : string}> = [];
  
  constructor(public fetchPowerPointService : FetchPowerPointService) {
    this.classroomPanels = new Array(9);
    this.displayPanelsViewEnabled = false;
    this.panelStatus = "Show Panels";
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  showMenu() {
    this.page_scroll_height = document.getElementById('page_scroll_viewer').offsetHeight + "px";
    this.displayPanelsViewEnabled = !this.displayPanelsViewEnabled;
    var div = document.getElementById("show_panel_button");
    var rect = div.getBoundingClientRect();
    this.rect = (rect.left) + "px";

    if (this.displayPanelsViewEnabled) {
      this.panelStatus = "Hide Panels";
      setTimeout(() => {
        var slider = document.getElementById('display_panels_column');
        slider.setAttribute("style", "transition: 2s;");
        slider.setAttribute("style", "right: 0;"); 
      }, 60);  
    } else {
      this.panelStatus = "Show Panels";
    }
  }
}


