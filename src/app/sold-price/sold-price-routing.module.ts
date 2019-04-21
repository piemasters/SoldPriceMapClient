import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SoldPriceComponent } from './sold-price.component';

const routes: Routes = [
  {
    path: '',
    component: SoldPriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoldPriceRoutingModule {}
