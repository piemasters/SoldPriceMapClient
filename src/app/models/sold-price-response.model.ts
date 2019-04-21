import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class SoldPriceResponse {
  public vals: SoldPriceResponseValues[];

  constructor(vals: SoldPriceResponseValues[]) {
    this.vals = vals;
  }
}

export class SoldPriceResponseValues {
  public name: string;
  public values: SoldPrice[];

  constructor(name: string, values: SoldPrice[]) {
    this.name = name;
    this.values = values;
  }
}

export class SoldPrice {
  public lat: number;
  public long: number;
  public price: number;

  constructor(lat: number, long: number, price: number) {
    this.lat = lat;
    this.long = long;
    this.price = price;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SoldPriceResponseAdapter implements Adapter<SoldPriceResponse> {
  adapt(soldPriceResponse: any): SoldPriceResponse {
    return new SoldPriceResponse(
      soldPriceResponse.data.pricesByRange
    );
  }
}

