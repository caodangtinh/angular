import { Injectable } from '@angular/core';
import { Stock } from './stocks.model';
import { LocalStorageService } from './local-storage.service';

const DEFAULT_BALANCE: number = 10000;

@Injectable()
export class AccountService {
    constructor(private localStorageService: LocalStorageService) {

    }
    /**
     * Private properties
     */
    private _balance = DEFAULT_BALANCE;
    private _cost: number = 0;
    private _value: number = 0;
    private _stocks: Stock[] = [];

    /**
     * Getter
     */
    get balance() {
        return this._balance;
    }

    get cost() {
        return this._cost;
    }

    get value() {
        return this._value;
    }

    get stocks() {
        return this._stocks;
    }

    /**
     * Service methods
     */

    init() {
        this._stocks = this.localStorageService.get('stocks', []);
        this._balance = this.localStorageService.get('balance', DEFAULT_BALANCE);
        this._cost = this.localStorageService.get('cost', 0);
    }

    reset(): void {
        this._stocks = [];
        this._balance = DEFAULT_BALANCE;
        this._value = this._cost = 0;
        this.cacheValues();
    }
    purchase(stock: Stock): void {
        stock = Object.assign({}, stock);
        if (stock.price < this.balance) {
            this._balance = this.debit(stock.price, this.balance);
            stock.cost = stock.price;
            this._cost = this.credit(stock.price, this.cost);
            stock.change = 0;
            this._stocks.push(stock);
            this.calculateValue();
            this.cacheValues();
        }
    }

    sell(index: number): void {
        const stock = this.stocks[index];
        if (stock) {
            this._balance = this.credit(stock.price, this.balance);
            this.stocks.splice(index, 1);
            this._cost = this.debit(stock.cost, this.cost);
            this.calculateValue();
            this.cacheValues();
        }
    }

    private calculateValue(): void {
        this._value = this._stocks
            .map(stock => stock.price)
            .reduce((a, b) => (a + b), 0);
    }

    private debit(amount: number, balance: number): number {
        return (balance - amount);
    }

    private credit(amount: number, balance: number): number {
        return (balance + amount);
    }

    private cacheValues() {
        this.localStorageService.set('stocks', this.stocks);
        this.localStorageService.set('balance', this.balance);
        this.localStorageService.set('cost', this.cost);
    }


}
