import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppRoutes } from './app.routing';

// sevices
import { StockMarketService } from './services/stock-market.service';

// components
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MyFundsComponent } from './my-funds/my-funds.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { BuyDialogComponent } from './buy-dialog/buy-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MyFundsComponent,
    MyPortfolioComponent,
    ResetButtonComponent,
    BuyDialogComponent
],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    StockMarketService
  ],
  entryComponents: [BuyDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
