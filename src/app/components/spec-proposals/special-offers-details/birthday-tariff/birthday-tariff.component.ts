import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-birthday-tariff',
  templateUrl: './birthday-tariff.component.html',
  styleUrls: ['./birthday-tariff.component.scss']
})
export class BirthdayTariffComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
