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
    <span class="line"></span>
    <p><span class="mdi mdi-star"></span>Chat de Perguntas e respostas com IA’s</p>
    <p><span class="mdi mdi-star"></span>5 Especialistas</p>
    <p><span class="mdi mdi-star"></span>IA’s com treinamento avançado</p>
    <p><span class="mdi mdi-star"></span>Responder perguntas enviadas por imagem</p>
    <p><span class="mdi mdi-star"></span>Responder perguntas enviadas por áudio</p>
    <p class="space-last">
      <span class="mdi mdi-star"></span>Gerar exercícios para o usuário fazer
    </p>
    <defaultBtn text="Ativo" background="#2971201A" color="#000000" width="370px" />
  </div>
  <div class="text">
    <h1>PREMIUM</h1>
    <h2>R$ 50,00 / mês</h2>
  </div>
</template>
<style scoped>
@import '@/assets/sass/_subscription.scss';
</style>
