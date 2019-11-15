import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ZaletComponent } from '../conference-details/zalet/zalet.component';
import { SmallHallComponent } from './small-hall/small-hall.component';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';

const routes: Routes = [
  { path: 'zalet', component: ZaletComponent },
  { path: 'smallHall', component: SmallHallComponent },
  { path: 'meetingRoom', component: MeetingRoomComponent }
];

@NgModule({
  declarations: [ZaletComponent, SmallHallComponent, MeetingRoomComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ConferenceDetailsModule { }
