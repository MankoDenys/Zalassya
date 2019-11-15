import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WweekendOfferComponent } from './wweekend-offer.component';

describe('WweekendOfferComponent', () => {
  let component: WweekendOfferComponent;
  let fixture: ComponentFixture<WweekendOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WweekendOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WweekendOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
