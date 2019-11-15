import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-aple',
  templateUrl: './aple.component.html',
  styleUrls: ['./aple.component.scss']
})
export class ApleComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
