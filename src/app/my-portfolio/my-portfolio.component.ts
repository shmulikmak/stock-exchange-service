import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { TableElement } from '../models/interface';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit, AfterViewInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  // const ELEMENT_DATA: TableElement[] = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // ];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

}
