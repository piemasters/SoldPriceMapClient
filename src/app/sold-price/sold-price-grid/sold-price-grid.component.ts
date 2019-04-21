import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-sold-price-grid',
  templateUrl: './sold-price-grid.component.html',
  styleUrls: ['./sold-price-grid.component.scss']
})
export class SoldPriceGridComponent implements OnInit {
  public scatterChartOptions: ChartOptions = { responsive: true };
  public scatterChartType: ChartType = 'scatter';
  @Input() scatterChartData: ChartDataSets[];

  constructor() { }

  ngOnInit() {
    this.scatterChartData = [ { data: [{x: 0, y: 0}] } ];
  }

}
