import { TestBed, inject } from '@angular/core/testing';

import { ProfileValidate } from './profilevalidate.helpers';

describe('ProfileValidate', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [ProfileValidate]
        });
    });

    it('should be created', inject([ProfileValidate], (service: ProfileValidate) => {
        expect(service).toBeTruthy();
    }));
});
