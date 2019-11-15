import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WweekendOfferComponent } from './wweekend-offer/wweekend-offer.component';
import { LongStayComponent } from './long-stay/long-stay.component';
import { HourlyTariffComponent } from './hourly-tariff/hourly-tariff.component';
import { DailyTariffComponent } from './daily-tariff/daily-tariff.component';
import { BirthdayTariffComponent } from './birthday-tariff/birthday-tariff.component';

const routes: Routes = [
  { path: 'weekendoff', component: WweekendOfferComponent },
  { path: 'longstay', component: LongStayComponent },
  { path: 'hourly', component: HourlyTariffComponent },
  { path: 'daily', component: DailyTariffComponent },
  { path: 'birth', component: BirthdayTariffComponent }
];

@NgModule({
  declarations: [WweekendOfferComponent, LongStayComponent, HourlyTariffComponent, DailyTariffComponent, BirthdayTariffComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class SpecialOffersDetailsModule { }
