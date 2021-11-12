import { Component, OnInit } from '@angular/core';
import { CryptocurrenciesService } from '../services/cryptocurrencies.service';

@Component({
  selector: 'app-my-watchlist',
  templateUrl: './my-watchlist.component.html',
  styleUrls: ['./my-watchlist.component.scss']
})
export class MyWatchlistComponent implements OnInit {
  public cryptocurrenciesTable1: any = null;

  constructor(
    private cryptocurrenciesService: CryptocurrenciesService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.cryptocurrenciesService.getTable1().subscribe(data => this.cryptocurrenciesTable1 = data);
  }
}
