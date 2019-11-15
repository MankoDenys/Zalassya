import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-lux',
  templateUrl: './lux.component.html',
  styleUrls: ['./lux.component.scss']
})
export class LuxComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
