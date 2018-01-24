import { TestBed, inject } from '@angular/core/testing';

import { GoogleChartsBaseServiceService } from './google-charts-base-service.service';

describe('GoogleChartsBaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleChartsBaseServiceService]
    });
  });

  it('should be created', inject([GoogleChartsBaseServiceService], (service: GoogleChartsBaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
