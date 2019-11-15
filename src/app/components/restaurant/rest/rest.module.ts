import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalutComponent } from '../restaurant-details/salut/salut.component';
import { ConfectioneryComponent } from '../restaurant-details/confectionery/confectionery.component';
import { ApleComponent } from '../restaurant-details/aple/aple.component';
import { BarComponent } from '../restaurant-details/bar/bar.component';

const routes: Routes = [
  { path: 'salut', component: SalutComponent },
  { path: 'confectionery', component: ConfectioneryComponent },
  { path: 'aple', component: ApleComponent },
  { path: 'bar', component: BarComponent },
  
];

@NgModule({
  declarations: [SalutComponent,
    ConfectioneryComponent,
    ApleComponent,
    BarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class RestModule { }
