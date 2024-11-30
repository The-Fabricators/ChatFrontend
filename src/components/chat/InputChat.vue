<script setup>
import { reactive, ref } from 'vue'
import { useGenericAIStore } from '@/stores'
import { useRoute } from 'vue-router';

const route = useRoute()

const genericAIStore = useGenericAIStore()
const message = ref('')
const post = reactive({
  input_text: message,
  chat_name: route.params.id
})
</script>

<template>
  <div class="container-form">
    <img class="clip-icon" src="@/assets/images/chat/paperclip.png" alt="" />
    <form @submit.prevent="">
      <input
        class="input-prompt"
        type="text"
        placeholder="Envie uma mensagem para βias"
        v-model="message"
      />
    </form>
    <button type="submit" class="submit-button" @click="genericAIStore.postMessage(post)">
      <img src="@/assets/images/chat/arrow-top-2.png" alt="" />
    </button>
  </div>
</template>

<style scoped>
@import '@/assets/sass/chat/_input.scss';
</style>
