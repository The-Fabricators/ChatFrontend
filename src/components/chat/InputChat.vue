<script setup>
import { reactive, ref } from 'vue'
import { useGenericAIStore } from '@/stores'
import { useChatStore } from '@/stores/chat'

const chatStore = useChatStore()

const genericAIStore = useGenericAIStore()
const message = ref('')
const post = reactive({
  input_text: message,
})
const data = reactive({
  input: '',
  output: '',
})
const sendMessage = () => {
    chatStore.sendMessage(data.input)
    data.input_text = ''
}
</script>

<template>
  <div class="container-form">
    <img class="clip-icon" src="@/assets/images/chat/paperclip.png" alt="" />
    <form @submit.prevent="">
      <input
        class="input-prompt"
        type="text"
        placeholder="Envie uma mensagem para βias"
        v-model="data.input"
      />
    </form>
    <button type="submit" class="submit-button" @click="sendMessage()">
      <img src="@/assets/images/chat/arrow-top-2.png" alt="" />
    </button>
  </div>
</template>

<style scoped>
@use '@/assets/sass/chat/_input.scss';
</style>
