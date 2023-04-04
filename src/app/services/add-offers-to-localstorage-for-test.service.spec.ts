import { TestBed } from '@angular/core/testing';

import { AddOffersToLocalstorageForTestService } from './add-offers-to-localstorage-for-test.service';

describe('AddOffersToLocalstorageForTestService', () => {
  let service: AddOffersToLocalstorageForTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddOffersToLocalstorageForTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
