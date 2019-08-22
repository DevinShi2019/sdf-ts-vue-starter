import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export const routes = [{
    component: () => import('@/modules/hello/index.vue'),
    name: 'hello',
    path: '/hello',
  },
  {
    path: '/',
    redirect: '/hello'
  },
];
const router = new Router({
  mode: 'hash',
  routes,
});
export default router;
