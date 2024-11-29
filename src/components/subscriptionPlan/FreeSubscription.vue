<script setup>
import defaultBtn from '../global/buttons/defaultBtn.vue'
</script>
<template>
  <div class="subscription-container free">
    <div class="text">
      <h1>FREE</h1>
      <h2>Plano Padrão</h2>
      <p>Chat de Perguntas e respostas com IA’s</p>
      <p class="space-last">5 Especialistas</p>
    </div>
    <!-- <span class="line"></span> -->
    <div class="text">
      <p><span class="mdi mdi-close"></span>Chat de Perguntas e respostas com IA’s</p>
      <p><span class="mdi mdi-close"></span>5 Especialistas</p>
      <p><span class="mdi mdi-close"></span>IA’s com treinamento avançado</p>
      <p><span class="mdi mdi-close"></span>Responder perguntas enviadas por imagem</p>
      <p><span class="mdi mdi-close"></span>Responder perguntas enviadas por áudio</p>
      <p class="space-last">
        <span class="mdi mdi-close"></span>Gerar exercícios para o usuário fazer
      </p>
    </div>
    <defaultBtn text="Ativo" background="#2971201A" color="#000000" width="350px" cursor="default" />
  </div>
</template>
<style scoped>
@import '@/assets/sass/_subscription.scss';
</style>
