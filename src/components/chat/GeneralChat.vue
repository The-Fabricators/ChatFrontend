<script setup>
import { HeaderChat, InputChat, HelpMessage, MessagesArea } from "@/components";
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
@use '@/assets/sass/chat/_chat.scss';
</style>
