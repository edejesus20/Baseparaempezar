/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UniversityService } from './university.service';

describe('Service: University', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversityService]
    });
  });

  it('should ...', inject([UniversityService], (service: UniversityService) => {
    expect(service).toBeTruthy();
  }));
});
