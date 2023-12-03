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
      component: () => import('../views/register/RegisterView.vue')
    },
    {
      path: '/registerComplete',
      name: 'registerComplete',
      component: () => import('../views/register/RegistrationCompletedView.vue')
    },
    {
      path: '/register/activate',
      name: 'registerActivate',
      component: () => import('../views/register/RegistrationActivateView.vue')
    },
    {
      path: '/tokenRegenerate',
      name: 'tokenRegenerate',
      component: () => import('../views/register/RegistrationTokenRegenerate.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: () => import('../views/forgotPassword/ForgotPasswordView.vue')
    },
    {
      path: '/forgotPassword/emailSent',
      name: 'forgotPasswordEmailSent',
      component: () => import('../views/forgotPassword/ForgotPasswordEmailSentView.vue')
    },
    {
      path: '/setNewPassword',
      name: 'setNewPassword',
      component: () => import('../views/forgotPassword/ForgotPasswordNewPasswordView.vue')
    },
    {
      path: '/forgotPassword/success',
      name: 'forgotPasswordSuccess',
      component: () => import('../views/forgotPassword/ForgotPasswordSuccessView.vue')
    },
    {
      path: '/selectSubmodes/:mode', // :mode dynamic segment of the rout
      name: 'selectSubmodes',
      component: () => import('../views/SelectSubmodesView.vue'),
      props: true
    },
    {
      path: '/writing/:submode/:title',
      name: 'writing',
      component: () => import('../views/WritingView.vue'),
      props: true
    },
    {
      path: '/writing/:journalId?',
      name: 'edit',
      component: () => import('../views/WritingView.vue'),
      props: true
    },

    {
      path: '/freeWriting',
      name: 'freeWriting',
      component: () => import('../views/FreeWritingView.vue')
    },
    {
      path: '/personalSettings',
      name: 'personalSettings',
      component: () => import('../views/PersonalSettingsView.vue')
    },
    {
      path: '/appSettings',
      name: 'appSettings',
      component: () => import('../views/AppSettingsView.vue')
    }
  ]
})

export default router
