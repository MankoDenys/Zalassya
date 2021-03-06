import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confectionery',
  templateUrl: './confectionery.component.html',
  styleUrls: ['./confectionery.component.scss']
})
export class ConfectioneryComponent implements OnInit {

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
