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
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

    { 
      path: '/admin/dasboard',
      name: 'admin',
      component: () => import('../views/admin/login.vue')
    }

  ]
})

export default router
