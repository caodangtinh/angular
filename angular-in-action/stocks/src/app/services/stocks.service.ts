import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const STOCKS: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const SERVICE_URL = 'https://angular2-in-action-api.herokuapp.com';


export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {
  constructor(private http: HttpClient) { }

  get() {
    return STOCKS.slice();
  }

  add(stock) {
    STOCKS.push(stock);
    return this.get();
  }

  remove(stock) {
    STOCKS.splice(STOCKS.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(SERVICE_URL + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
