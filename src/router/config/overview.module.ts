import lazyLoad from '../lazyLoad';
export const OverviewRouteList = [
  {
    path: '/',
    component: lazyLoad(() => import('@/page/overview')),
    exact: true,
  }
]