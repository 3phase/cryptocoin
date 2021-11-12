import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCryptocurrenciesComponent } from './top-cryptocurrencies/top-cryptocurrencies.component';
import { IgxButtonModule, IgxIconModule, IgxGridModule, IgxActionStripModule, IgxComboModule, IgxCardModule, IgxAvatarModule, IgxNavbarModule, IgxToggleModule, IgxNavigationDrawerModule, IgxDialogModule, IgxInputGroupModule, IgxExcelExporterService } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { PriceChartComponent } from './price-chart/price-chart.component';
import { MyWatchlistComponent } from './my-watchlist/my-watchlist.component';
import { HttpClientModule } from '@angular/common/http';
import { NewFinancialChartComponent } from './newfinancialchart/newfinancialchart.component';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    TopCryptocurrenciesComponent,
    PriceChartComponent,
    MyWatchlistComponent,
    NewFinancialChartComponent
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
    HttpClientModule,
    IgxFinancialChartModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  providers: [
    IgxExcelExporterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
