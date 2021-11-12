import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrenciesService {
  constructor(private http: HttpClient) { }

  public getTable1(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/58847cca258947f3b287241ff14b4062`)
      .pipe(
        take(1),
        map((res: any) => res.map((oldObject: any) => new Object({ ...oldObject, PercentageChange24h: oldObject.PercentageChange24h / 100 })))
      );
  }

  public getCoinInfo(coin: string): Observable<any> {
    return this.http.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=720`)
      .pipe(
        take(1),
        map((res: any) => res.Data.Data.map((oldObject: any) => new Object({ ...oldObject, time: new Date(oldObject.time * 1000) })))
      );
  }
}
