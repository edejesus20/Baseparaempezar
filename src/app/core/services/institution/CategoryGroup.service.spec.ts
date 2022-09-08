/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryGroupService } from './CategoryGroup.service';

describe('Service: CategoryGroup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryGroupService]
    });
  });

  it('should ...', inject([CategoryGroupService], (service: CategoryGroupService) => {
    expect(service).toBeTruthy();
  }));
});
