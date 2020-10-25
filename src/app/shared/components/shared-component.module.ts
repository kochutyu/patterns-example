import {NgModule} from '@angular/core';
import {SharedStaticComponentModule} from './static-components/shared-static-component.module';

@NgModule({
  imports: [
    SharedStaticComponentModule
  ],
  exports: [
    SharedStaticComponentModule
  ]
})
export class SharedComponentModule {
}
