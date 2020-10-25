import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedStaticComponentModule {
}
