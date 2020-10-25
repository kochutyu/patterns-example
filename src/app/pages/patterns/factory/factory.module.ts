import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryPageComponent } from './factory-page/factory-page.component';
import {FactoryRoutingModule} from './factory-routing.module';

@NgModule({
  declarations: [FactoryPageComponent],
  imports: [
    CommonModule,
    FactoryRoutingModule
  ]
})
export class FactoryModule { }
