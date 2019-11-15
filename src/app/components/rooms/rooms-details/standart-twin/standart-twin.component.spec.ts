import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartTwinComponent } from './standart-twin.component';

describe('StandartTwinComponent', () => {
  let component: StandartTwinComponent;
  let fixture: ComponentFixture<StandartTwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandartTwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandartTwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
