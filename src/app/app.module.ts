import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCryptocurrenciesComponent } from './top-cryptocurrencies/top-cryptocurrencies.component';
import { IgxButtonModule, IgxIconModule, IgxGridModule, IgxActionStripModule, IgxComboModule, IgxCardModule, IgxAvatarModule, IgxNavbarModule, IgxToggleModule, IgxNavigationDrawerModule, IgxDialogModule, IgxInputGroupModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { PriceChartComponent } from './price-chart/price-chart.component';
import { MyWatchlistComponent } from './my-watchlist/my-watchlist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopCryptocurrenciesComponent,
    PriceChartComponent,
    MyWatchlistComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxGridModule,
    IgxActionStripModule,
    FormsModule,
    IgxComboModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxNavigationDrawerModule,
    IgxDialogModule,
    IgxInputGroupModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
