import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hourly-tariff',
  templateUrl: './hourly-tariff.component.html',
  styleUrls: ['./hourly-tariff.component.scss']
})
export class HourlyTariffComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
