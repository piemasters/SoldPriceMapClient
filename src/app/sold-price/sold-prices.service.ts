import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SoldPriceQuery } from '../models/sold-price-query.model';
import { SoldPriceResponse, SoldPriceResponseAdapter } from '../models/sold-price-response.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoldPricesService {

  constructor(private http: HttpClient, private adapter: SoldPriceResponseAdapter) {}

  getSoldPrices(queryData: SoldPriceQuery[]): Observable<SoldPriceResponse> {
    const graphqlQuery = {
      query: `
         query FetchSoldPrices($queryData: [QuerySearch]) {
          pricesByRange(queryData: $queryData) {
            name
            values {
              lat
              long
            }
          }
        }
      `,
      variables: {
        queryData
      }
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http
      .post('https://server.davidnorton.app/graphql', JSON.stringify(graphqlQuery), httpOptions)
      .pipe(
        map(soldPriceResponse => this.adapter.adapt(soldPriceResponse))
      );
  }

}
