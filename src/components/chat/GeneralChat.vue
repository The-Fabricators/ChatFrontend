<script setup>
import { HeaderChat, InputChat, HelpMessage, MessagesArea } from '@/components'
import { HeaderChat, InputChat, HelpMessage } from '@/components'
import { HeaderChat, InputChat, HelpMessage, MessagesArea } from '@/components'
</script>

<template>
  <div class="container">
    <HeaderChat />
    <!-- <HelpMessage /> -->
    <MessagesArea />
    <MessagesArea />
    <InputChat />
  </div>
</template>

<style scoped>
@import '@/assets/sass/chat/_chat.scss';
</style>
