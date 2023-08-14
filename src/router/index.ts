import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: () => import('../views/ForgotPassword.vue')
    },
    {
      path: '/selectSubmodes',
      name: 'selectSubmodes',
      component: () => import('../views/SelectSubmodesView.vue')
    },
    {
      path: '/promptedWriting',
      name: 'promptedWriting',
      component: () => import('../views/PromptedWritingView.vue')
    },
    {
      path: '/freeWriting',
      name: 'freeWriting',
      component: () => import('../views/FreeWritingView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    }
  ]
})

export default router
