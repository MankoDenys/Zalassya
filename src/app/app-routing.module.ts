import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from "./components/hotel/hotel.component";
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { RoomsComponent } from "./components/rooms/rooms.component";
import { AttendanceComponent } from "./components/attendance/attendance.component";
import { ConferenceComponent } from "./components/conference/conference.component";
import { SpecProposalsComponent } from "./components/spec-proposals/spec-proposals.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { AgreementComponent } from './components/hotel/hotel-add/agreement/agreement.component';


const routes: Routes = [
  { path: 'hotel', component: HotelComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'conference', component: ConferenceComponent },
  { path: 'specProposalsotel', component: SpecProposalsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'agreement', component: AgreementComponent },
  { path: '', redirectTo: '/hotel', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
