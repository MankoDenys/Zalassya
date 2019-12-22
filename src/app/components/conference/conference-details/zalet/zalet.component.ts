import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-zalet',
  templateUrl: './zalet.component.html',
  styleUrls: ['./zalet.component.scss']
})
export class ZaletComponent implements OnInit {

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
