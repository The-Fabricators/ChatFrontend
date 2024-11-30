import { createRouter, createWebHistory } from 'vue-router'
import { GeneralChat } from '@/components'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/global/HomeView.vue'),
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/chat/ChatView.vue'),
      children: [
        {
          path: '',
          name: 'general',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'nature',
          name: 'nature',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'math',
          name: 'mathematic',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'humans',
          name: 'humans',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'languages',
          name: 'languages',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'redaction',
          name: 'redaction',
          component: GeneralChat,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue'),
    },
    {
      path: '/subscription-plan',
      name: 'subscriptionPlan',
      component: () => import('@/views/subscriptionPlan/SubscriptionPlanView.vue'),
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/views/global/PaymentView.vue'),
      meta: {
        isAuth: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.isAuth && !authStore.state.isLogged) {
    next('/login')
  } else {
    next()
  }
})

export default router
