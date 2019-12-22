import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-superior',
  templateUrl: './superior.component.html',
  styleUrls: ['./superior.component.scss']
})
export class SuperiorComponent implements OnInit {

  isShow = true;  

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
