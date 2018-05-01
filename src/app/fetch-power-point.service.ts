import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
// we get the JSON from the server, we parse the JSON, and then we return the array of lesson plans;
export class FetchPowerPointService {
  public lessonPlans = [];
  public lessonIndex : number;
  public slideIndex : number;
  public lessonSubject : Subject<any> = new Subject<any>();
  public slideSubject : Subject<any> = new Subject<any>();

  constructor() {
    this.getLessonsFromServer();
    this.lessonIndex = 0;
  }

  getLessonsFromServer() {
    var jsonString = `[
    {"name": "uber", "list" : [
      {"id": 0, "title": "Case Study", "path_name": "assets/powerpoints/Uber/slide_1.png"},
      {"id": 1, "title": "Agenda", "path_name": "assets/powerpoints/Uber/slide_2.png"},
      {"id": 2, "title": "Company Background", "path_name": "assets/powerpoints/Uber/slide_3.png"},
      {"id": 3, "title": "Case Highlights", "path_name": "assets/powerpoints/Uber/slide_4.png"},
      {"id": 4, "title": "Business Model", "path_name": "assets/powerpoints/Uber/slide_5.png"},
      {"id": 5, "title": "Product Definition", "path_name": "assets/powerpoints/Uber/slide_6.png"},
      {"id": 6, "title": "Customer Definition", "path_name": "assets/powerpoints/Uber/slide_7.png"},
      {"id": 7, "title": "Value Proposition", "path_name": "assets/powerpoints/Uber/slide_8.png"},
      {"id": 8, "title": "Profit Proposition", "path_name": "assets/powerpoints/Uber/slide_9.png"},
      {"id": 9, "title": "Distribution Channels", "path_name": "assets/powerpoints/Uber/slide_10.png"},
      {"id": 10, "title": "Internal Analysis", "path_name": "assets/powerpoints/Uber/slide_11.png"},
      {"id": 11, "title": "Internal Analysis (cont)", "path_name": "assets/powerpoints/Uber/slide_12.png"},
      {"id": 12, "title": "Internal Analysis (cont)", "path_name": "assets/powerpoints/Uber/slide_13.png"},
      {"id": 13, "title": "External Analysis", "path_name": "assets/powerpoints/Uber/slide_14.png"},
      {"id": 14, "title": "External Analysis - General Environment", "path_name": "assets/powerpoints/Uber/slide_15.png"},
      {"id": 15, "title": "SWOT Analysis", "path_name": "assets/powerpoints/Uber/slide_16.png"},
      {"id": 16, "title": "SWOT Analysis (cont)", "path_name": "assets/powerpoints/Uber/slide_17.png"}
    ]
  },
    {"name": "lyft", "list": [
      {"id": 0, "title": "Transmedia Branding", "path_name": "assets/powerpoints/Lyft/slide_1.png"},
      {"id": 1, "title": "Business Goals", "path_name": "assets/powerpoints/Lyft/slide_2.png"},
      {"id": 2, "title": "Situational Analysis", "path_name": "assets/powerpoints/Lyft/slide_3.png"},
      {"id": 3, "title": "Statement Of Opportunity", "path_name": "assets/powerpoints/Lyft/slide_4.png"},
      {"id": 4, "title": "Research", "path_name": "assets/powerpoints/Lyft/slide_5.png"},
      {"id": 5, "title": "Key Audience", "path_name": "assets/powerpoints/Lyft/slide_6.png"},
      {"id": 6, "title": "Campain objectives", "path_name": "assets/powerpoints/Lyft/slide_7.png"},
      {"id": 7, "title": "LyftFam", "path_name": "assets/powerpoints/Lyft/slide_8.png"},
      {"id": 8, "title": "Ride of your Life", "path_name": "assets/powerpoints/Lyft/slide_9.png"},
      {"id": 9, "title": "LyftLocal", "path_name": "assets/powerpoints/Lyft/slide_10.png"},
      {"id": 10, "title": "Lyft", "path_name": "assets/powerpoints/Lyft/slide_11.png"},
      {"id": 11, "title": "Timeline", "path_name": "assets/powerpoints/Lyft/slide_12.png"},
      {"id": 12, "title": "Evaluation", "path_name": "assets/powerpoints/Lyft/slide_13.png"},
      {"id": 13, "title": "Thank You", "path_name": "assets/powerpoints/Lyft/slide_14.png"}
    ]},
    {"name": "google", "list": [
      {"id": 0, "title": "Google", "path_name": "assets/powerpoints/Google/slide_1.png"},
      {"id": 1, "title": "Mission", "path_name": "assets/powerpoints/Google/slide_2.png"},
      {"id": 2, "title": "Founders", "path_name": "assets/powerpoints/Google/slide_3.png"},
      {"id": 3, "title": "History", "path_name": "assets/powerpoints/Google/slide_4.png"},
      {"id": 4, "title": "Evaluation", "path_name": "assets/powerpoints/Google/slide_5.png"},
      {"id": 5, "title": "Evaluation", "path_name": "assets/powerpoints/Google/slide_6.png"},
      {"id": 6, "title": "Evaluation", "path_name": "assets/powerpoints/Google/slide_7.png"},
      {"id": 7, "title": "How", "path_name": "assets/powerpoints/Google/slide_8.png"},
      {"id": 8, "title": "Working Process", "path_name": "assets/powerpoints/Google/slide_9.png"},
      {"id": 9, "title": "Google Services", "path_name": "assets/powerpoints/Google/slide_10.png"},
      {"id": 10, "title": "Products", "path_name": "assets/powerpoints/Google/slide_11.png"},
      {"id": 11, "title": "Future of Google", "path_name": "assets/powerpoints/Google/slide_12.png"},
      {"id": 12, "title": "Translation", "path_name": "assets/powerpoints/Google/slide_13.png"},
      {"id": 13, "title": "What's next", "path_name": "assets/powerpoints/Google/slide_14.png"},
      {"id": 14, "title": "Thank You", "path_name": "assets/powerpoints/Google/slide_15.png"}
    ]},
    {"name": "Facebook", "list": [
      {"id": 0, "title": "Facebook", "path_name": "assets/powerpoints/Facebook/slide_1.png"},
      {"id": 1, "title": "Hype", "path_name": "assets/powerpoints/Facebook/slide_2.png"},
      {"id": 2, "title": "Connections", "path_name": "assets/powerpoints/Facebook/slide_3.png"},
      {"id": 3, "title": "History", "path_name": "assets/powerpoints/Facebook/slide_4.png"},
      {"id": 4, "title": "Social Network", "path_name": "assets/powerpoints/Facebook/slide_5.png"},
      {"id": 5, "title": "What is Social Networking", "path_name": "assets/powerpoints/Facebook/slide_6.png"},
      {"id": 6, "title": "So What exactly is a Social Network?", "path_name": "assets/powerpoints/Facebook/slide_7.png"},
      {"id": 7, "title": "You may ask...", "path_name": "assets/powerpoints/Facebook/slide_8.png"},
      {"id": 8, "title": "Facebook Advice for Parents", "path_name": "assets/powerpoints/Facebook/slide_9.png"},
      {"id": 9, "title": "Privacy Policy", "path_name": "assets/powerpoints/Facebook/slide_10.png"},
      {"id": 10, "title": "A Guide to Staying Safe on Facebook", "path_name": "assets/powerpoints/Facebook/slide_11.png"},
      {"id": 11, "title": "Advantages and Disadvantages", "path_name": "assets/powerpoints/Facebook/slide_12.png"},
      {"id": 12, "title": "Fun Facts", "path_name": "assets/powerpoints/Facebook/slide_13.png"}
    ]},
    {"name": "Youtube", "list": [
      {"id": 0, "title": "Youtube", "path_name": "assets/powerpoints/Youtube/slide_1.png"},
      {"id": 1, "title": "Menu", "path_name": "assets/powerpoints/Youtube/slide_2.png"},
      {"id": 2, "title": "Overview", "path_name": "assets/powerpoints/Youtube/slide_3.png"},
      {"id": 3, "title": "History/Creator", "path_name": "assets/powerpoints/Youtube/slide_4.png"},
      {"id": 4, "title": "Purpose", "path_name": "assets/powerpoints/Youtube/slide_5.png"},
      {"id": 5, "title": "Content", "path_name": "assets/powerpoints/Youtube/slide_6.png"},
      {"id": 6, "title": "Uses", "path_name": "assets/powerpoints/Youtube/slide_7.png"},
      {"id": 7, "title": "How", "path_name": "assets/powerpoints/Youtube/slide_8.png"},
      {"id": 8, "title": "Similar Sites", "path_name": "assets/powerpoints/Youtube/slide_9.png"},
      {"id": 9, "title": "Opinions", "path_name": "assets/powerpoints/Youtube/slide_10.png"},
      {"id": 10, "title": "Positives/Negatives", "path_name": "assets/powerpoints/Youtube/slide_11.png"}
    ]},
    {"name": "LinkedIn", "list": [
      {"id": 0, "title": "Intro", "path_name": "assets/powerpoints/Linkedin/slide_1.png"},
      {"id": 1, "title": "Topic", "path_name": "assets/powerpoints/Linkedin/slide_2.png"},
      {"id": 2, "title": "Timeline", "path_name": "assets/powerpoints/Linkedin/slide_3.png"},
      {"id": 3, "title": "Target Audience", "path_name": "assets/powerpoints/Linkedin/slide_4.png"},
      {"id": 4, "title": "At A Glance", "path_name": "assets/powerpoints/Linkedin/slide_5.png"},
      {"id": 5, "title": "Get Connected", "path_name": "assets/powerpoints/Linkedin/slide_6.png"},
      {"id": 6, "title": "Get Connected (cont)", "path_name": "assets/powerpoints/Linkedin/slide_7.png"},
      {"id": 7, "title": "Advertising", "path_name": "assets/powerpoints/Linkedin/slide_8.png"},
      {"id": 8, "title": "Advertising (cont)", "path_name": "assets/powerpoints/Linkedin/slide_9.png"},
      {"id": 9, "title": "SWOT Analysis", "path_name": "assets/powerpoints/Linkedin/slide_10.png"},
      {"id": 10, "title": "Facets of Effect", "path_name": "assets/powerpoints/Linkedin/slide_11.png"},
      {"id": 11, "title": "Current Developments in the Market", "path_name": "assets/powerpoints/Linkedin/slide_12.png"}
    ]}
  ]`
    this.lessonPlans = JSON.parse(jsonString);
  }

  getUserLessons() : any {
    return this.lessonPlans; 
  }

  selectLesson(index: number) {
    this.lessonIndex = index; 
    this.lessonSubject.next(this.lessonIndex);  // this index of the array is then emmited to all subscribers
  }

  getLesson(index : number) {
    console.log("The value of lessonPlans is : " + this.lessonPlans[index]);
    return this.lessonPlans[index].list; 
  }

  selectSlide(slideIndex : number) {
    console.log("[fetch-power-point.service.ts] selectSlide() - The value of slideIndex is:  " + slideIndex);
    this.slideSubject.next(slideIndex);
  }

  getSlide(slideIndex : number) {
    console.log("[fetch-power-point.service] inside getSlide()"); 
    console.log("The value being returned is: " + this.lessonPlans[this.lessonIndex].list[slideIndex]);
    return this.lessonPlans[this.lessonIndex].list[slideIndex];
  }
}