import { TestBed, inject } from '@angular/core/testing';

import { FetchProductService } from './fetch-product.service';

describe('FetchProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchProductService]
    });
  });

  it('should be created', inject([FetchProductService], (service: FetchProductService) => {
    expect(service).toBeTruthy();
  }));
});
