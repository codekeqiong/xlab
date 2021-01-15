import React from 'react';
import lazyLoad from './lazyLoad';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AppPage } from '@/layout/layout-page';
// import { OverviewRouteList } from '@/router/config/overview.module';

export interface RouteMapType {
  path: string;
  component: any;
  exact: boolean;
}
const RouteMap: RouteMapType[] = [{
  path: '/',
  component: lazyLoad(() => import('@/page/overview')),
  exact: true,
},{
  path: '/userAuth',
  component: lazyLoad(() => import('@/page/testPage')),
  exact: true,
}]
// {
//   OverviewRouteList
// };
export const AllRouter = [...RouteMap];

export const router = (
  // basename 定义默认路由访问的前缀
  <BrowserRouter basename='xlab'>
    <Switch>
      <AppPage>
        <Switch>
          {RouteMap.map((item, i) => {
            return <Route key={i} {...item} />
            // return <AuthRoute key={i} authRoute={(location, next) => userAuthConfirmation(item, location, next)} path={item.path} exact={item.exact} component={item.component} />;
          })}
        </Switch>
      </AppPage>
    </Switch>
  </BrowserRouter>
);