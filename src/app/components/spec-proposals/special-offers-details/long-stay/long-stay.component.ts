import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-long-stay',
  templateUrl: './long-stay.component.html',
  styleUrls: ['./long-stay.component.scss']
})
export class LongStayComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
