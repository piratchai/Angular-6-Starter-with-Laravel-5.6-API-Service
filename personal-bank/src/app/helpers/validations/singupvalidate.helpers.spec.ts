import { TestBed, inject } from '@angular/core/testing';

import { SingupValidate } from './singupvalidate.helpers';

describe('Singupvalidate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingupValidate]
    });
  });

  it('should be created', inject([SingupValidate], (service: SingupValidate) => {
    expect(service).toBeTruthy();
  }));
});
