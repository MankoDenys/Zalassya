import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecProposalsComponent } from './spec-proposals.component';

describe('SpecProposalsComponent', () => {
  let component: SpecProposalsComponent;
  let fixture: ComponentFixture<SpecProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
