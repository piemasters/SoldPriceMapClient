import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sold-price',
  templateUrl: './sold-price.component.html',
  styleUrls: ['./sold-price.component.scss']
})
export class SoldPriceComponent implements OnInit {

  public scatterChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {  }

  updateTable(data: ChartDataSets[]) {
    this.scatterChartData = data;
  }

}
