import {NgModule} from '@angular/core';
import {SharedComponentModule} from './components/shared-component.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedComponentModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedComponentModule
  ]
})
export class SharedModule {
}
