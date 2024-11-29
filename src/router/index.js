import { createRouter, createWebHistory } from 'vue-router';
import { GeneralChat, NatureChat, MathematicChat, HumansChat, LanguagesChat, RedactionChat } from '@/components';

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
          component: GeneralChat
        },
        {
          path: 'nature',
          name: 'nature',
          component: NatureChat
        },
        {
          path: 'math',
          name: 'mathematic',
          component: MathematicChat
        },
        {
          path: 'humans',
          name: 'humans',
          component: HumansChat
        },
        {
          path: 'languages',
          name: 'languages',
          component: LanguagesChat
        },
        {
          path: 'Redaction',
          name: 'Redaction',
          component: RedactionChat
        }
      ]
    },
    {
      path: '/subscription-plan',
      name: 'subscriptionPlan',
      component: () => import('@/views/subscriptionPlan/SubscriptionPlanView.vue')
    },
    {
      path: '/dark',
      name: 'dark',
      component: () => import('@/views/DarkView.vue')
    }
  ],
});

export default router;