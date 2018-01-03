import { Component, OnInit } from '@angular/core';
import { StockMarketService } from '../services/stock-market.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.css']
})
export class ResetButtonComponent implements OnInit {

  constructor(public stockMarketService: StockMarketService) { }

  ngOnInit() {
  }

  resetAccount() {
    this.stockMarketService.resetAccount()
      .subscribe(data => console.log('data', data),
      err => console.log('Error occured', err));
  }
}
