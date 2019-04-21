import { NgModule } from '@angular/core';

import { SoldPriceComponent } from './sold-price.component';
import { SoldPriceRoutingModule } from './sold-price-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoldPricesService } from './sold-prices.service';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { SoldPriceFormComponent } from './sold-price-form/sold-price-form.component';
import { SoldPriceGridComponent } from './sold-price-grid/sold-price-grid.component';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    SoldPriceComponent,
    SoldPriceFormComponent,
    SoldPriceGridComponent,
  ],
  imports: [
    CommonModule,
    SoldPriceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    SoldPricesService
  ]
})
export class SoldPriceModule { }
