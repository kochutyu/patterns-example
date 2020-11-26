import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FactoryRoutingModule} from './factory-routing.module';

import {FactoryPageComponent} from './factory-page/factory-page.component';

@NgModule({
  declarations: [
    FactoryPageComponent
  ],
  imports: [
    CommonModule,
    FactoryRoutingModule
  ]
})
export class FactoryModule {
}
