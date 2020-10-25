import {NgModule} from '@angular/core';
import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {APP_ROUTER_CONFIG} from './core/config/router/app-router.config';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: APP_ROUTER_CONFIG[0].route.join('/'),
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: APP_ROUTER_CONFIG[1].route.join('/'),
    loadChildren: () => import('./pages/patterns/factory/factory.module').then(m => m.FactoryModule),
  },
  {path: '**', redirectTo: '/'}
];

const config: ExtraOptions = {
  scrollPositionRestoration: 'top',
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
