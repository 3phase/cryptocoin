import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComboSelectionChangingEventArgs, IgxComboComponent } from 'igniteui-angular';
import { IgxFinancialChartComponent } from 'igniteui-angular-charts';
import { AMZNData, Stock } from '../newfinancialchart/data';
import { CryptocurrenciesService } from '../services/cryptocurrencies.service';

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.scss']
})
export class PriceChartComponent implements AfterViewInit {

  @ViewChild("combo", { read: IgxComboComponent })
  public combo: IgxComboComponent;

  @ViewChild("chart", { read: IgxFinancialChartComponent })
  public chart: IgxFinancialChartComponent;

  public data: any[] = [];

  private _coin: string;

  constructor(
    private _data: CryptocurrenciesService,
    private _activatedRoute: ActivatedRoute
  ) { 
    this._coin = this._activatedRoute.snapshot.paramMap.get('coin') || 'btc';
  }

  ngAfterViewInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this._data.getTable1().subscribe((res: any) => {
      this.combo.data = res;
      this.combo.setSelectedItem(this._coin, true);
    });

    this.addCoinToChart(this._coin);

    this.combo.selectionChanging.subscribe((evt: IComboSelectionChangingEventArgs) => {
      if (evt.added.length > 0) {
        evt.added.forEach((newCoin: string) => {
          this.addCoinToChart(newCoin);
        });
      }
      if (evt.removed.length > 0) {
        evt.removed.forEach((removedCoin: string) => {
          this.data = this.data.filter((coin: any) => coin[1] !== removedCoin);
        });
      }
    });

  }

  public addCoinToChart(coin: string): void {
    this._data.getCoinInfo(coin).subscribe((res: any) => {
      this.data.push([res, coin]);
      this.chart.notifyInsertItem(this.data, this.data.length - 1, [res, coin]);
    });
  }
}
