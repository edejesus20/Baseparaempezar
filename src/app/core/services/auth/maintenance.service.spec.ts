/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaintenanceService } from './maintenance.service';

describe('Service: Maintenance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaintenanceService]
    });
  });

  it('should ...', inject([MaintenanceService], (service: MaintenanceService) => {
    expect(service).toBeTruthy();
  }));
});
