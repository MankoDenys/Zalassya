import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApleComponent } from './aple.component';

describe('ApleComponent', () => {
  let component: ApleComponent;
  let fixture: ComponentFixture<ApleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
