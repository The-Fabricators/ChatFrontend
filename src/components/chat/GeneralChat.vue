<script setup>
import { HeaderChat, InputChat, MessagesArea } from '@/components'
</script>

<template>
  <div class="container">
    <HeaderChat />
    <!-- <HelpMessage /> -->
    <MessagesArea />
    <InputChat />
  </div>
</template>

<style scoped>
@import '@/assets/sass/chat/_chat.scss';
</style>
