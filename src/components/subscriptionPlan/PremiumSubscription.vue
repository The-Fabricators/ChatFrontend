<script setup>
import DefaultBtn from '../global/buttons/defaultBtn.vue'
</script>
<template>
  <div class="subscription-container premium">
    <div class="text">
      <h1>PREMIUM</h1>
      <h2>R$ 50,00 / mês</h2>
      <p><span class="mdi mdi-star"></span>Chat de Perguntas e respostas com IA’s</p>
      <p><span class="mdi mdi-star"></span>5 Especialistas</p>
      <p><span class="mdi mdi-star"></span>IA’s com treinamento avançado</p>
      <p><span class="mdi mdi-star"></span>Responder perguntas enviadas por imagem</p>
      <p><span class="mdi mdi-star"></span>Responder perguntas enviadas por áudio</p>
      <p class="space-last">
        <span class="mdi mdi-star"></span>Gerar exercícios para o usuário fazer
      </p>
    </div>
    <DefaultBtn
      text="Comprar Plano"
      background="#7A1F40"
      color="#fff"
      width="350px"
      padding="1vw 2vw 1vw 2vw"
    />
  </div>
</template>
<style scoped>
@import '@/assets/sass/_subscription.scss';
</style>
