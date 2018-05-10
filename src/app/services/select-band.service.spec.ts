import { TestBed, inject } from '@angular/core/testing';

import { SelectBandService } from './select-band.service';

describe('SelectBandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectBandService]
    });
  });

  it('should be created', inject([SelectBandService], (service: SelectBandService) => {
    expect(service).toBeTruthy();
  }));
});
