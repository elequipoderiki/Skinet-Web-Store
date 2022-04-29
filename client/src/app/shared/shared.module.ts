import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './components/text-input/text-input.component';
import { SteeperComponent } from './components/steeper/steeper.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    OrderTotalsComponent,
    PagingHeaderComponent,
    PagerComponent,
    SteeperComponent,
    TextInputComponent,
    BasketSummaryComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CdkStepperModule,    
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    RouterModule
  ],

  exports: [
    BasketSummaryComponent,
    BsDropdownModule,
    CarouselModule,
    CdkStepperModule,    
    FormsModule,
    OrderTotalsComponent,
    PagerComponent,
    PaginationModule,
    PagingHeaderComponent,
    ReactiveFormsModule ,
    SteeperComponent,
    TextInputComponent,   
  ]
})
export class SharedModule { }
