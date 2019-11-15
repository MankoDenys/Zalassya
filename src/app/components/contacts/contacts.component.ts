import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  lat: number = 50.37844570836948;
  lng: number = 30.351315917672196;

  mySPlist = {
    color: 'green',
    fontSize: '14px',
    fontWeight: 'bold',
    text: "Готель «Заласся»"
}

  choseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(event);
  }

  onMouseOver(infoWindow, $event: MouseEvent) {
    infoWindow.open();
}

onMouseOut(infoWindow, $event: MouseEvent) {
    infoWindow.close();
}

icon = {
  labelOrigin: { x: 16, y: 48 },
  url: "https://maps.google.com/mapfiles/kml/paddle/red-blank.png",
  scaledSize: {
    width: 32,
    height: 32
  }
};

  constructor() { 
  }

  ngOnInit() {
  }

}
