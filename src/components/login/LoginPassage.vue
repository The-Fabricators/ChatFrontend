<template>
    <div class="container">
        <span class="exitButton" @click="authStore.isAuthenticating = false;">
            <img src="@/assets/images/reject.png" alt="">
        </span>
        <passage-auth :app-id="appId"></passage-auth>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from '@/stores/auth';
  import '@passageidentity/passage-elements/passage-auth';

  const authStore = useAuthStore();
  
  const appId = import.meta.env.VITE_PASSAGE_APP_ID
  </script>
  
  <style scoped>
  @import '@/assets/sass/global/_login.scss';
  </style>