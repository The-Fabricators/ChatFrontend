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
          path: ':id',
          name: 'genericAI',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'nature',
          name: 'naturalscienceAI',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'math',
          name: 'mathAI',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'humans',
          name: 'humanscienceAI',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'languages',
          name: 'languageAI',
          component: GeneralChat,
          meta: {
            isAuth: true,
          },
        },
        {
          path: 'redaction',
          name: 'textwritingAI',
          component: GeneralChat,
        },
      ],
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
    next('/')
  } else {
    next()
  }
})

export default router
