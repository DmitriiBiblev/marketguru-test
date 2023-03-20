import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components';
import { SellersService } from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects, dashboardReducer, featureKey } from './store';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature(featureKey, dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  providers: [
    SellersService,
  ],
})
export class DashboardModule {
}
