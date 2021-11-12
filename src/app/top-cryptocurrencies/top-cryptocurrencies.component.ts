import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxExcelExporterService, IgxGridComponent, IgxExcelExporterOptions } from 'igniteui-angular';
import { CryptocurrenciesService } from '../services/cryptocurrencies.service';

@Component({
  selector: 'app-top-cryptocurrencies',
  templateUrl: './top-cryptocurrencies.component.html',
  styleUrls: ['./top-cryptocurrencies.component.scss']
})
export class TopCryptocurrenciesComponent implements OnInit {

  @ViewChild("grid", { read: IgxGridComponent })
  public grid: IgxGridComponent;

  public cryptocurrenciesTable1: any = null;

  constructor(
    private cryptocurrenciesService: CryptocurrenciesService,
    private _exportToExcelService: IgxExcelExporterService
  ) { }

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.cryptocurrenciesService.getTable1().subscribe(data => this.cryptocurrenciesTable1 = data);
  }

  public exportToExcel(): void {
    this._exportToExcelService.exportData((this.grid.data as any[]), new IgxExcelExporterOptions("cryptocoin"));
  }
}
