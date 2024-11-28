<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1 class="text">Hello World!</h1>
  <span class="mdi mdi-account-credit-card icon"></span>
  <RouterView />
</template>

<style scoped>
@import '@/assets/sass/_home.scss';
</style>
