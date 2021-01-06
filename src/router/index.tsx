import React from 'react';
import lazyLoad from './lazyLoad';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AppPage } from '@/layout/layout-page';
import { OverviewRouteList } from '@/router/config/overview.module';

export interface RouteMapType {
  path: string;
  component: any;
  exact: boolean;
}
const RouteMap: RouteMapType[] = [{
  path: '/',
  component: lazyLoad(() => import('@/page/overview')),
  exact: true,
}]
// {
//   OverviewRouteList
// };
export const AllRouter = [...RouteMap];

export const router = (
  <BrowserRouter basename='xlab'>
    <Switch>
      <AppPage>
        <Switch>
          {RouteMap.map((item, i) => {
            return <Route {...item} />
            // return <AuthRoute key={i} authRoute={(location, next) => userAuthConfirmation(item, location, next)} path={item.path} exact={item.exact} component={item.component} />;
          })}
        </Switch>
      </AppPage>
    </Switch>
  </BrowserRouter>
);