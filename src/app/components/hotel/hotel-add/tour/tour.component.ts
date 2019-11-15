import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  constructor(private location: Location) {

  }
  
  ngOnInit() {
     }

     goBack(): void {
      this.location.back();
    }
}
