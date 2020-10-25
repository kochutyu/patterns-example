import {Component} from '@angular/core';

import {IRouterConfig} from '../../../../core/interfaces/config/router.interface';

import {APP_ROUTER_CONFIG} from '../../../../core/config/router/app-router.config';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  router: Array<IRouterConfig> = APP_ROUTER_CONFIG;
  navigation: Array<IRouterConfig>;

  constructor() {
    this.initNavigation();
  }

  private initNavigation(): void {
    this.navigation = this.router.slice(1);
  }

}
