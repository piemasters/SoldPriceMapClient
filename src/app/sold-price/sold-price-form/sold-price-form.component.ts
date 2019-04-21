import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SoldPriceQuery } from '../../models/sold-price-query.model';
import { SoldPricesService } from '../sold-prices.service';
import { SoldPriceResponse } from '../../models/sold-price-response.model';

@Component({
  selector: 'app-sold-price-form',
  templateUrl: './sold-price-form.component.html',
  styleUrls: ['./sold-price-form.component.scss']
})
export class SoldPriceFormComponent implements OnInit {

  query = [
    { data: [{x: 0, y: 0}], name: 'lowest', label: '0% - 5%', low: 0, high: 5, backgroundColor: '#FFf000', pointRadius: 3 },
    { data: [{x: 0, y: 0}], name: 'low', label: '5% - 25%', low: 5, high: 25, backgroundColor: '#FFa000', pointRadius: 4 },
    { data: [{x: 0, y: 0}], name: 'medium', label: '25% - 75%', low: 25, high: 75, backgroundColor: '#FF5a00', pointRadius: 5 },
    { data: [{x: 0, y: 0}], name: 'high', label: '75% - 95%', low: 75, high: 95, backgroundColor: '#FF0000', pointRadius: 8 },
    { data: [{x: 0, y: 0}], name: 'highest', label: '95% - 100%', low: 95, high: 100, backgroundColor: '#9b0000', pointRadius: 10 }
  ];

  constructor(private soldPriceService: SoldPricesService) { }

  @Output()
  change: EventEmitter<any> = new EventEmitter<boolean>();

  ngOnInit() {
    this.performQuery();
  }

  performQuery() {
    const getPricesByRange: SoldPriceQuery[] = this.query.map(queryData => ({
        name: queryData.name,
        low: queryData.low,
        high: queryData.high
    }));

    this.soldPriceService.getSoldPrices(getPricesByRange).subscribe((response: SoldPriceResponse) => {
      for (const data of response.vals) {
        const match = this.query.find(obj => obj.name === data.name);
        if (match) {
          match.data = data.values.map(d => ({x: d.lat, y: d.long}));
        }
      }
      this.change.emit([...this.query]);
    });


  }

}
