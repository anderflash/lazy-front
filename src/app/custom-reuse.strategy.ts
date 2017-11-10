// This impl. bases upon one that can be found in the router's test cases.
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
export class CustomReuseStrategy implements RouteReuseStrategy {

  handlers: { [key: string]: DetachedRouteHandle } = {};
  // tslint:disable:no-console
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.debug('CustomReuseStrategy:shouldDetach', route.routeConfig, route.routeConfig.loadChildren);
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return false;
    }
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    console.debug('CustomReuseStrategy:store', route, handle);
    this.handlers[route.data.key + route.routeConfig.path + route.queryParams['user']] = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.debug('CustomReuseStrategy:shouldAttach', route);
    return !!route.routeConfig && !!this.handlers[route.data.key + route.routeConfig.path + route.queryParams['user']];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    console.debug('CustomReuseStrategy:retrieve', route);
    if (!route.routeConfig) {
      return null;
    }
    if (route.routeConfig.loadChildren) {
      return null;
    }

    return this.handlers[route.data.key + route.routeConfig.path + route.queryParams['user']];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.debug('CustomReuseStrategy:shouldReuseRoute', future, curr);
    return (future.routeConfig === curr.routeConfig) || future.data.reuse;
  }

}
