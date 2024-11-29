import { createRouter, createWebHistory } from 'vue-router'
import { GeneralChat } from '@/components'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/global/HomeView.vue'),
    },
    {
      path: '/chat/',
      name: 'chat',
      component: () => import('@/views/chat/ChatView.vue'),
      children: [
        {
          path: '',
          name: 'general',
          component: GeneralChat,
        },
        {
          path: 'nature',
          name: 'nature',
          component: GeneralChat,
        },
        {
          path: 'math',
          name: 'mathematic',
          component: GeneralChat,
        },
        {
          path: 'humans',
          name: 'humans',
          component: GeneralChat,
        },
        {
          path: 'languages',
          name: 'languages',
          component: GeneralChat,
        },
        {
          path: 'Redaction',
          name: 'Redaction',
          component: GeneralChat,
        },
      ],
    },
    {
      path: '/subscription-plan',
      name: 'subscriptionPlan',
      component: () => import('@/views/subscriptionPlan/SubscriptionPlanView.vue'),
    },
  ],
})

export default router
