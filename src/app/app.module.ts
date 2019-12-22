import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ConferenceComponent } from './components/conference/conference.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { SpecProposalsComponent } from './components/spec-proposals/spec-proposals.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestModule } from "./components/restaurant/rest/rest.module";
import { HotelAboutModule } from "./components/hotel/hotel-about/hotel-about.module";
import { RoomsDetailsModule } from "./components/rooms/rooms-details/rooms-details.module";
import { ConferenceDetailsModule } from "./components/conference/conference-details/conference-details.module";
import { SpecialOffersDetailsModule } from "./components/spec-proposals/special-offers-details/special-offers-details.module";
import { AgmCoreModule } from "@agm/core";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    RoomsComponent,
    RestaurantComponent,
    ConferenceComponent,
    AttendanceComponent,
    SpecProposalsComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RestModule,
    HotelAboutModule,
    RoomsDetailsModule,
    ConferenceDetailsModule,
    SpecialOffersDetailsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgfkUxofgEfKtcoKknqzwht56xzzV91ic'
    }),
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
