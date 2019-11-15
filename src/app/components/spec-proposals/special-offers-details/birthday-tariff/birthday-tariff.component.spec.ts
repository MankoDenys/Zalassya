import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayTariffComponent } from './birthday-tariff.component';

describe('BirthdayTariffComponent', () => {
  let component: BirthdayTariffComponent;
  let fixture: ComponentFixture<BirthdayTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
