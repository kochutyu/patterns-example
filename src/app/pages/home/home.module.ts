import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRouterModule} from './home-router.module';
import {SharedModule} from '../../shared/shared.module';

import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRouterModule,
    SharedModule
  ]
})
export class HomeModule {
}
