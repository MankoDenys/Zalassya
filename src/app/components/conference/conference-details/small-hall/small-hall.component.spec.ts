import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallHallComponent } from './small-hall.component';

describe('SmallHallComponent', () => {
  let component: SmallHallComponent;
  let fixture: ComponentFixture<SmallHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
