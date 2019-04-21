import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { SoldPriceComponent } from './sold-price.component';
import { SoldPriceRoutingModule } from './sold-price-routing.module';
import { SoldPriceFormComponent } from './sold-price-form/sold-price-form.component';
import { SoldPriceGridComponent } from './sold-price-grid/sold-price-grid.component';
import { SoldPricesService } from './sold-prices.service';

describe('SoldPriceComponent', () => {
  let component: SoldPriceComponent;
  let fixture: ComponentFixture<SoldPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SoldPriceComponent,
        SoldPriceFormComponent,
        SoldPriceGridComponent,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule,
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
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture = TestBed.createComponent(SoldPriceComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Sold Price Map');
  });
});
