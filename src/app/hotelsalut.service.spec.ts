import { TestBed } from '@angular/core/testing';

import { HotelsalutService } from './hotelsalut.service';

describe('HotelsalutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelsalutService = TestBed.get(HotelsalutService);
    expect(service).toBeTruthy();
  });
});
