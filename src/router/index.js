import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login-crm',
    meta: { layout: 'empty' },
    component: () => import('../views/Login-crm.vue')
  },
  {
    path: '/register',
    name: 'register-crm',
    meta: { layout: 'empty' },
    component: () => import('../views/Register-crm.vue')
  },
  {
    path: '/',
    name: 'home-crm',
    meta: { layout: 'main' },
    component: () => import('../views/Home-crm.vue')
  },
  {
    path: '/categories',
    name: 'categories-crm',
    meta: { layout: 'main' },
    component: () => import('../views/Categories-crm.vue')
  },
  {
    path: '/detali-record',
    name: 'detali-record-crm',
    meta: { layout: 'main' },
    component: () => import('../views/Detali-record-crm.vue')
  },
  {
    path: '/history',
    name: 'history-crm',
    meta: { layout: 'main' },
    component: () => import('../views/History-crm.vue')
  },
  {
    path: '/planning',
    name: 'planning-crm',
    meta: { layout: 'main' },
    component: () => import('../views/Planning-crm.vue')
  },
  {
    path: '/profile',
    name: 'profile-crm',
    meta: { layout: 'main' },
    component: () => import('../views/Profile-crm.vue')
  },
  {
    path: '/record',
    name: 'record-crm',
    meta: { layout: 'main' },
    component: () => import('../views/Record-crm.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
