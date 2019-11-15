import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-salut',
  templateUrl: './salut.component.html',
  styleUrls: ['./salut.component.scss']
})
export class SalutComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
