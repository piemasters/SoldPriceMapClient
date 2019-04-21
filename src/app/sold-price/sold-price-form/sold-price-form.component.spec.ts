import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { SoldPriceFormComponent } from './sold-price-form.component';
import { SoldPriceRoutingModule } from '../sold-price-routing.module';
import { SoldPriceComponent } from '../sold-price.component';
import { SoldPriceGridComponent } from '../sold-price-grid/sold-price-grid.component';

describe('SoldPriceFormComponent', () => {
  let component: SoldPriceFormComponent;
  let fixture: ComponentFixture<SoldPriceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SoldPriceComponent,
        SoldPriceFormComponent,
        SoldPriceGridComponent,
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        SoldPriceRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldPriceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
