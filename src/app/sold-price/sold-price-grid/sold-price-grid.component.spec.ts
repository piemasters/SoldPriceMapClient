import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import { SoldPriceGridComponent } from './sold-price-grid.component';
import { SoldPriceRoutingModule } from '../sold-price-routing.module';
import { SoldPriceComponent } from '../sold-price.component';
import { SoldPriceFormComponent } from '../sold-price-form/sold-price-form.component';

describe('SoldPriceGridComponent', () => {
  let component: SoldPriceGridComponent;
  let fixture: ComponentFixture<SoldPriceGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SoldPriceComponent,
        SoldPriceFormComponent,
        SoldPriceGridComponent,
      ],
      imports: [
        RouterTestingModule,
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
    fixture = TestBed.createComponent(SoldPriceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
