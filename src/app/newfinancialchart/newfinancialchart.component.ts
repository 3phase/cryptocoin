import { Component } from '@angular/core';
import { AMZNData, Stock } from './data';

@Component({
  selector: 'app-newfinancialchart',
  templateUrl: './newfinancialchart.component.html',
  styleUrls: ['./newfinancialchart.component.scss']
})
export class NewFinancialChartComponent {
  public data: Stock[] = AMZNData;
}
