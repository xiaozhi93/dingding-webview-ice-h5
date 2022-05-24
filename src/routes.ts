import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
  },
];

export default routerConfig;
