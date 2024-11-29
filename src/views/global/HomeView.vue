<script setup>
import { HeaderHome } from '@/components'
</script>

<template>
  <main class="main-home">
    <div class="home-container">
      <HeaderHome />
    </div>

    <div class="elements-container">
      <div class="eva-container">
        <img src="@/assets/images/eva.svg" alt="" />
      </div>

      <div class="info-home-container">
        <div class="i-as-container">
          <h1 class="text t1">I as</h1>
          <h1 class="text t2"></h1>
        </div>
        <p class="text t3">an AI to help you with the ENEM and entrance exams</p>
<<<<<<< HEAD
=======
         <DefaultBtn style="margin-top: 20px;" text="Fazer Login" padding="2px" border_radius="60px" :font_size="widthScreen < 600 ?'35px' : '17px'" :border="widthScreen < 600 ? '3px solid black' : '2px solid black'" :height="widthScreen < 600 ? '110px' : '55px'" font_weight="600" :width="widthScreen < 600 ? '300px' : '220px'" color="white" />
         <div class="container-down-info">
          <p>Modo Escuro</p>
         </div>
>>>>>>> 8a26f90 (FIX: Fixed rebase erros #50)
      </div>
    </div>
  </main>
</template>
<style scoped>
@import '@/assets/sass/home/_home.scss';
</style>
