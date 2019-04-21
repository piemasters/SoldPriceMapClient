export class SoldPriceQuery {
  public name: string;
  public low: number;
  public high: number;

  constructor(name: string, low: number, high: number) {
    this.name = name;
    this.low = low;
    this.high = high;
  }
}
