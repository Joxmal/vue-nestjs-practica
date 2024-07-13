import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Home from '@/views/Users/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    { path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    //admin
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/login.vue')
    },
    
    { 
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/login.vue'),
    },
    {
      path: '/admin/dashboard',
      name: 'adminDashboard',
      component: () => import('../views/admin/dasboard/Index.vue')
    },
    
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

export default router
