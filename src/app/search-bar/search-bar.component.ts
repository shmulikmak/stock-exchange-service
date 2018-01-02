import { Component, OnInit } from '@angular/core';
import { StockMarketService } from '../services/stock-market.service';
import { BuyDialogComponent } from '../buy-dialog/buy-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  showResults = false;
  results;

  constructor(private stockMarketService: StockMarketService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  searchStocks(event: string) {
    if (event) {
      this.stockMarketService.searchStock(event)
        .subscribe(data => {
          this.showResults = true;
          this.results = data['stocks'];
          console.log(this.results);
        },
        err => {
          console.log('Error occured', err);
        });
    } else {
      this.showResults = false;
    }
  }

  buyDialog(stock) {
    const dialogRef = this.dialog.open(BuyDialogComponent, {
      width: '500px',
      height: '500px',
      data: { data: stock }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
