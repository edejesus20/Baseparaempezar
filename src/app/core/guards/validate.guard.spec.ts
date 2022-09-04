import { TestBed } from '@angular/core/testing';

import { ValidateGuard } from './validate.guard';

describe('ValidateGuard', () => {
  let guard: ValidateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
