<template>
  <div class="content">
  <passage-auth :app-id="appId"></passage-auth>
</div>
</template>

<script setup>
import '@passageidentity/passage-elements/passage-auth'

const appId = import.meta.env.VITE_PASSAGE_APP_ID
</script>

<style scoped>
@use '@/assets/sass/global/_login.scss';
</style>
