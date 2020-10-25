import {NgModule} from '@angular/core';
import {SharedComponentModule} from './components/shared-component.module';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentModule
  ],
  exports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentModule
  ]
})
export class SharedModule {
}
