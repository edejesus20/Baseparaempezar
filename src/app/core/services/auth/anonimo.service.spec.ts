import { TestBed } from '@angular/core/testing';

import { AnonimoService } from './anonimo.service';

describe('Auth0Service', () => {
  let service: AnonimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnonimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
