import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {
  FiltersComponent,
  PaginationComponent,
  SortingComponent,
  TableComponent,
} from './components';
import { SellersService } from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects, dashboardReducer, featureKey } from './store';
import { InputModule, SelectModule } from '../shared/components';
import { DashboardContainerComponent } from './containers';


@NgModule({
  declarations: [
    FiltersComponent,
    SortingComponent,
    TableComponent,
    PaginationComponent,
    DashboardContainerComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature(featureKey, dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
    SelectModule,
    InputModule,
  ],
  providers: [
    SellersService,
  ],
})
export class DashboardModule {
}
