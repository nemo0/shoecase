import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Buy from '@/components/pages/Buy.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
