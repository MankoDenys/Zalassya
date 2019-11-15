import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LuxComponent } from '../rooms-details/lux/lux.component';
import { HalfluxComponent } from '../rooms-details/halflux/halflux.component';
import { SuperiorComponent } from './superior/superior.component';
import { StandartTwinComponent } from './standart-twin/standart-twin.component';
import { StandartComponent } from './standart/standart.component';
import { EconomComponent } from './econom/econom.component';
import { TariffsComponent } from './tariffs/tariffs.component';

const routes: Routes = [
  { path: 'lux', component: LuxComponent },
  { path: 'halflux', component: HalfluxComponent },
  { path: 'superior', component: SuperiorComponent },
  { path: 'standartTwin', component: StandartTwinComponent },
  { path: 'standart', component: StandartComponent },
  { path: 'econom', component: EconomComponent },
  { path: 'tariffs', component: TariffsComponent }
];

@NgModule({
  declarations: [LuxComponent, HalfluxComponent, SuperiorComponent, StandartTwinComponent, StandartComponent, EconomComponent, TariffsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RoomsDetailsModule { }
