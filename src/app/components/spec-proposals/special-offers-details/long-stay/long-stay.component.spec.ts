import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongStayComponent } from './long-stay.component';

describe('LongStayComponent', () => {
  let component: LongStayComponent;
  let fixture: ComponentFixture<LongStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
