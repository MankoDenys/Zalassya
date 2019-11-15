import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-econom',
  templateUrl: './econom.component.html',
  styleUrls: ['./econom.component.scss']
})
export class EconomComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
