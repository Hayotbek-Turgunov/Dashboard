import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../layouts/dashboard/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue'),
      },

      {
        path: '/help',
        name: 'Help',
        component: () => import('../views/help/index.vue'),
      },
      {
        path: '/income',
        name: 'Income',
        component: () => import('../views/income/index.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/products/index.vue'),
      },

      {
        path: '/customers',
        name: 'customers',
        component: () => import('../views/customers/index.vue'),
      },

      {
        path: '/promote',
        name: 'Promote',
        component: () => import('../views/promote/index.vue'),
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
