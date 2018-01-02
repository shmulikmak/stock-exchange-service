/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockMarketService } from './stock-market.service';

describe('Service: StockMarket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockMarketService]
    });
  });

  it('should ...', inject([StockMarketService], (service: StockMarketService) => {
    expect(service).toBeTruthy();
  }));
});