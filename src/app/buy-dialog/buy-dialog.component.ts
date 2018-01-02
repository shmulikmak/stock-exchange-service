import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { StockMarketService } from '../services/stock-market.service';

@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.css']
})
export class BuyDialogComponent implements OnInit {

  enableButton = true;
  userOffer;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BuyDialogComponent>,
    public stockMarketService: StockMarketService) {
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onInputChange(input) {
    this.stockMarketService.getPortfolio().subscribe(data => {
      if (this.data.data.currentPrice * input <= data['funds']) {
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
        console.log(data);
        this.closeDialog();
      },
      err => {
        console.log('Error occured', err);
      });
  }

}
