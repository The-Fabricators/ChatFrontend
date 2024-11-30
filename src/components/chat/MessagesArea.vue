<script setup>
import { ref, onMounted } from 'vue'
import { useStaticDetailsStore } from '@/stores/staticDetails'
import { useChatStore } from '@/stores/chat'

const staticDetailsStore = useStaticDetailsStore()
const colors = ref({})
const chatStore = useChatStore()

onMounted(() => {
  colors.value = staticDetailsStore.whichColor
  console.log(colors.value)
})

const messages = ref([...chatStore.messages])
</script>

<template>
  <div class="container-father-messages">
    <div class="container-day-messages">
      <h2 class="day">29 de Novembro</h2>
      <div class="container-messages" v-for="message in messages" :key="message">
        <div class="container-father-my-message">
          <div class="container-my-message" :style="colors.user">
            <p>{{ message.input }}</p>
          </div>
        </div>
        <div class="container-father-ai-message">
          <div class="container-ai-typing" :style="colors.aiTyping">
            <p>{{ message.output }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@use '@/assets/sass/chat/_messages.scss';
</style>

<!-- <div class="container-ai-message">
  <img :src="staticDetailsStore.whichLogoResponseAi" alt="" />
  <div class="ai-message">
    <p>
      Artigos científicos sobre redação são bastante diversos, pois podem abordar temas
      como técnicas de escrita, redação acadêmica, criatividade na escrita, processos de
      revisão, entre outros. Para te ajudar, vou sugerir alguns temas e formas de buscar
      artigos:
      <strong>Principais temas relacionados à redação: </strong>
    </p>
    <ol>
      <li>Redação acadêmica:</li>
    </ol>
    <ul>
      <li>Técnicas de escrita científica.</li>
      <li>Estruturação de textos (introdução, desenvolvimento, conclusão)</li>
      <li>Normas e padronizações (ex.: ABNT, APA).</li>
    </ul>
  </div>
</div> -->
