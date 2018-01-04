import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { TableElement } from '../models/interface';
import { StockMarketService } from '../services/stock-market.service';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {

  displayedColumns = ['name', 'symbol', 'purchasedQuantity', 'purchasePrice', 'currentPrice', 'profitLoss', 'Sell'];
  @ViewChild(MatSort) sort: MatSort;
  ELEMENT_DATA: TableElement[];
  dataSource;

  constructor(public stockMarketService: StockMarketService) { }

  ngOnInit() {

    let tableContent;
    this.stockMarketService.getPortfolio()
      .subscribe(data => {
        tableContent = data['myStocks'].map((currElement, index) => {
          return {
            name: '',
            symbol: currElement.symbol,
            purchasedQuantity: currElement.quantity,
            purchasePrice: currElement.purchasePrice,
            currentPrice: '',
            profitLoss: '',
            Sell: '',
          };
        });

        this.ELEMENT_DATA = tableContent;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;
      },
      err => console.log('Error occured', err));
  }

}
