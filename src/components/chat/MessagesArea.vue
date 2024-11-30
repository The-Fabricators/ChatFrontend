<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useStaticDetailsStore } from '@/stores/staticDetails'
import { useChatStore } from '@/stores/chat'
import { useAnswersStore } from '@/stores/answers'
import { useGenericAIStore } from '@/stores'

import router from '@/router'
const staticDetailsStore = useStaticDetailsStore()
const chatStore = useChatStore()
const answerStore = useAnswersStore()
const genericAIStore = useGenericAIStore()

const chatId = router.currentRoute.value.params?.id

const colors = ref({})

console.log(chatId)

onMounted(async () => {
  colors.value = staticDetailsStore.whichColor
  console.log(colors.value)
  await chatStore.getChatById(chatId)
  await answerStore.GetAnswers(chatId)
  console.log(answerStore.answers)
})
</script>

<template>
  <h2 class="day">29 de Novembro</h2>
  <div class="container-father-messages">
    <div class="container-day-messages">
      <div v-for="message in answerStore.answers" :key="message.id" class="container-messages">
        <div class="container-father-my-message">
          <div class="container-my-message" :style="colors.user">
            <p>{{ message.answer }}</p>
          </div>
        </div>
        <div class="container-father-ai-message">
          <div class="container-ai-message">
            <img :src="staticDetailsStore.whichLogoResponseAi" alt="" />
            <div class="ai-message">
              {{ message.response }}
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-if="genericAIStore?.state?.currentResponse?.response || genericAIStore?.state?.isLoading" class="container-father-my-message">
        <div class="container-my-message" :style="colors.user">
          <p>{{ genericAIStore?.state?.currentResponse?.pergunta }}</p>
        </div>
      </div>
      <div v-if="genericAIStore?.state?.currentResponse?.response || genericAIStore?.state?.isLoading" class="container-father-ai-message">
        <div class="container-ai-message">
          <img :src="staticDetailsStore.whichLogoResponseAi" alt="" />
          <div class="ai-message">
            {{ genericAIStore?.state?.currentResponse?.resposta }}
          </div>
        </div>
      </div> -->
  <!-- <div class="container-is-typing" :style="colors.aiTyping"> -->
    <!-- <p>...</p> -->
  <!-- </div> -->
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/sass/chat/_messages.scss';
</style>
