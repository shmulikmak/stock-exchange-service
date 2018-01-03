import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { StockMarketService } from '../services/stock-market.service';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.css']
})
export class BuyDialogComponent implements OnInit, OnDestroy {

  enableButton = true;
  alive = true;
  userOffer;
  currentPrice;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BuyDialogComponent>,
    public stockMarketService: StockMarketService) {
    this.currentPrice = data.data.currentPrice;
  }

  ngOnInit() {
    TimerObservable.create(0, 5000)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.stockMarketService.searchStock(this.data.data.name)
          .subscribe(data => {
            this.currentPrice = (data as any).stocks['0'].currentPrice;
          },
          err => {
            console.log('Error occured', err);
          });
      });
  }

  onInputChange(input) {
    this.stockMarketService.getPortfolio().subscribe(data => {
      if (this.currentPrice * input <= data['funds']) {
        this.userOffer = input;
        this.enableButton = false;
      } else {
        this.enableButton = true;
      }
    });
  }

  buyStock() {
    this.stockMarketService.buyStocks(this.userOffer, this.data)
      .subscribe(data => {
        this.closeDialog();
      },
      err => {
        console.log('Error occured', err);
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.alive = false;
  }


}
