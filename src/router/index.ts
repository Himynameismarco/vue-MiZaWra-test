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
      path: '/selectSubmodes/:mode', // :mode dynamic segment of the rout
      name: 'selectSubmodes',
      component: () => import('../views/SelectSubmodesView.vue'),
      props: true
    },
    {
      path: '/writing',
      name: 'writing',
      component: () => import('../views/WritingView.vue')
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
