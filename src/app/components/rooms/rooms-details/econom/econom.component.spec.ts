import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomComponent } from './econom.component';

describe('EconomComponent', () => {
  let component: EconomComponent;
  let fixture: ComponentFixture<EconomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
