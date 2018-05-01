import { TestBed, inject } from '@angular/core/testing';

import { FetchPowerPointService } from './fetch-power-point.service';

describe('FetchPowerPointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchPowerPointService]
    });
  });

  it('should be created', inject([FetchPowerPointService], (service: FetchPowerPointService) => {
    expect(service).toBeTruthy();
  }));
});
