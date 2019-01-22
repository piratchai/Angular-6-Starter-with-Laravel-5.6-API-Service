import { TestBed, inject } from '@angular/core/testing';

import { LoginValidate } from './loginvalidate.helper';

describe('Loginvalidate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginValidate]
    });
  });

  it('should be created', inject([LoginValidate], (service: LoginValidate) => {
    expect(service).toBeTruthy();
  }));
});
