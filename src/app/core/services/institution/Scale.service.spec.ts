/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScaleService } from './Scale.service';

describe('Service: Scale', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScaleService]
    });
  });

  it('should ...', inject([ScaleService], (service: ScaleService) => {
    expect(service).toBeTruthy();
  }));
});
