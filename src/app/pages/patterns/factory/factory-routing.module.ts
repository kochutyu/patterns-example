import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FactoryPageComponent} from './factory-page/factory-page.component';

const routes: Routes = [
  {
    path: '', component: FactoryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryRoutingModule {
}
