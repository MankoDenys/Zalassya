import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-small-hall',
  templateUrl: './small-hall.component.html',
  styleUrls: ['./small-hall.component.scss']
})
export class SmallHallComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
