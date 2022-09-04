/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { XsegundoService } from './Xsegundo.service';

describe('Service: Xsegundo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XsegundoService]
    });
  });

  it('should ...', inject([XsegundoService], (service: XsegundoService) => {
    expect(service).toBeTruthy();
  }));
});
