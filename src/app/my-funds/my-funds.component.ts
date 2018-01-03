import { Component, OnInit, OnDestroy } from '@angular/core';
import { StockMarketService } from '../services/stock-market.service';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-my-funds',
  templateUrl: './my-funds.component.html',
  styleUrls: ['./my-funds.component.css']
})
export class MyFundsComponent implements OnInit, OnDestroy {

  myFunds;
  alive = true;
  constructor(public stockMarketService: StockMarketService) { }

  ngOnInit() {

    TimerObservable.create(0, 5000)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.stockMarketService.getPortfolio()
          .subscribe((data) => {
            this.myFunds = data['funds'];
          });
      });

  }

  ngOnDestroy() {
    this.alive = false;
  }

}
