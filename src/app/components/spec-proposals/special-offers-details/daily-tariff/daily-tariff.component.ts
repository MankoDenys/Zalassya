import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-daily-tariff',
  templateUrl: './daily-tariff.component.html',
  styleUrls: ['./daily-tariff.component.scss']
})
export class DailyTariffComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
