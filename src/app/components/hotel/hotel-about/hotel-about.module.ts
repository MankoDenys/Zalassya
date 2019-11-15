import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelAddComponent } from '../hotel-add/hotel-add/hotel-add.component';
import { DiscountComponent } from '../hotel-add/discount/discount.component';
import { WeekendComponent } from '../hotel-add/weekend/weekend.component';
import { TourComponent } from '../hotel-add/tour/tour.component';
import { MapComponent } from '../hotel-add/map/map.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'discount', component: DiscountComponent },
  { path: 'add', component: HotelAddComponent },
  { path: 'weekend', component: WeekendComponent },
  { path: 'tour', component: TourComponent },
  { path: 'map', component: MapComponent }
];

@NgModule({
  declarations: [HotelAddComponent,
                 DiscountComponent,
                 WeekendComponent,
                 TourComponent,
                 MapComponent,
                
                ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class HotelAboutModule { }
