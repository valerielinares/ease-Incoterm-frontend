import { TestBed, inject } from '@angular/core/testing';

import { IccService } from './icc.service';

describe('IccService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IccService]
    });
  });

  it('should be created', inject([IccService], (service: IccService) => {
    expect(service).toBeTruthy();
  }));
});
