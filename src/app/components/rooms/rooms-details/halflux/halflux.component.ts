import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-halflux',
  templateUrl: './halflux.component.html',
  styleUrls: ['./halflux.component.scss']
})
export class HalfluxComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
