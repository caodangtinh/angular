import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private stockService: StocksService) {
    this.symbols = stockService.get();
  }

  ngOnInit() {
    this.stockService.load(this.symbols).subscribe(stocks => {
      this.stocks = stocks;
    });
  }

}
