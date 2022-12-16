import { TestBed } from '@angular/core/testing';

import { PaymethodsService } from './paymethods.service';

describe('PaymethodsService', () => {
  let service: PaymethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
