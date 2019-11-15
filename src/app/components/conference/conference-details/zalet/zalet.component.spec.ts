import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaletComponent } from './zalet.component';

describe('ZaletComponent', () => {
  let component: ZaletComponent;
  let fixture: ComponentFixture<ZaletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
