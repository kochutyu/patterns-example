import {IRouterConfig} from '../../interfaces/config/router.interface';

export const APP_ROUTER_CONFIG: Array<IRouterConfig> = [
  {
    route: [''],
    classActive: ['active'],
    name: 'home'
  },
  {
    route: ['factory'],
    classActive: ['active'],
    name: 'factory'
  },
];
