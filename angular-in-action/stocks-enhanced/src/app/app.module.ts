import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyPipe, PercentPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AppRoutes } from './app.routes';
import { CardTypeDirective } from './directives/card-type.directive';
import { CardHoverDirective } from './directives/card-hover.directive';
import { ChangePipe } from './pipes/change.pipe';
import { NewsPipe } from './pipes/news.pipe';
import { ChangeDetectorPipe } from './pipes/change-detector.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    CardTypeDirective,
    CardHoverDirective,
    ChangePipe,
    NewsPipe,
    ChangeDetectorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutes
  ],
  providers: [
    StocksService,
    CurrencyPipe,
    PercentPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
