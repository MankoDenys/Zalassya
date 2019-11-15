import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfluxComponent } from './halflux.component';

describe('HalfluxComponent', () => {
  let component: HalfluxComponent;
  let fixture: ComponentFixture<HalfluxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfluxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
