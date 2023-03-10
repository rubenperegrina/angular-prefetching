import { TestBed } from '@angular/core/testing';

import { PreloadingStrategyServiceService } from './preloading-strategy-service.service';

describe('PreloadingStrategyServiceService', () => {
  let service: PreloadingStrategyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadingStrategyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
