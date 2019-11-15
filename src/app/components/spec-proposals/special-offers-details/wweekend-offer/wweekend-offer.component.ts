import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-wweekend-offer',
  templateUrl: './wweekend-offer.component.html',
  styleUrls: ['./wweekend-offer.component.scss']
})
export class WweekendOfferComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
