import { Component, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../services/cryptocurrencies.service';

@Component({
  selector: 'app-top-cryptocurrencies',
  templateUrl: './top-cryptocurrencies.component.html',
  styleUrls: ['./top-cryptocurrencies.component.scss']
})
export class TopCryptocurrenciesComponent implements OnInit {
  public cryptocurrenciesTable1: any = null;

  constructor(
    private cryptocurrenciesService: CryptocurrenciesService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.cryptocurrenciesService.getTable1().subscribe(data => this.cryptocurrenciesTable1 = data);
  }
}
