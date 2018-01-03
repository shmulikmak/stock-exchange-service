import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class StockMarketService {

  BASE_URL = 'http://testing.v2x.foresightauto.com/stock-exchange-service';
  searchUrl = '/market/search';
  refresh = '/management/refresh';
  portfolio = '/portfolio';
  buy = '/market/buy';
  deleteAccount = '/management';

  constructor(private http: HttpClient) { }

  searchStock(stocks) {
    return this.http
      .post(this.BASE_URL + this.searchUrl, {
        'searchString': stocks
      });
  }

  refreshStocks() {
    return this.http
      .get(this.BASE_URL + this.refresh).subscribe(data => {
        console.log(data);
      });
  }

  getPortfolio() {
    return this.http.get(this.BASE_URL + this.portfolio);
  }

  buyStocks(userOffer, stockDetails) {
    return this.http.post(this.BASE_URL + this.buy, {
      'stockSymbol': stockDetails.data.symbol,
      'stockQuantity': userOffer
    });
  }

  resetAccount() {
    return this.http.delete(this.BASE_URL + this.deleteAccount);
  }

}
