/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrainingsService } from './trainings.service';

describe('Service: Trainings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingsService]
    });
  });

  it('should ...', inject([TrainingsService], (service: TrainingsService) => {
    expect(service).toBeTruthy();
  }));
});
