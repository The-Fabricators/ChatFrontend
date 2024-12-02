<script setup>
import {  onMounted } from 'vue'
import { useChatStore } from '@/stores/chat'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter()
const chatStore = useChatStore()
const authStore = useAuthStore()

const user = authStore.state.user

onMounted(async() => {
  console.log(chatStore.chat)
  if (chatStore.chat.length == 0) {
    await chatStore.postChat(user)
  }
  else {
    await chatStore.getChat(user)
    router.push({ name: 'genericAI', params: { id: chatStore.chat.length } });
  }
})

</script>

<template>
    <div>
    </div>
    </template>