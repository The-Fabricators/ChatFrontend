<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef, computed } from 'vue'
import { BtnStroke } from '@/components/index'
import { useDarkMode } from '@/stores/darkMode.js' // Store para gerenciar tema
import router from '@/router'

// Estado para largura da tela
const widthScreen = ref(window.innerWidth)

// Função para atualizar largura da tela ao redimensionar
function updateWidth() {
  widthScreen.value = window.innerWidth
}

// Adiciona listener ao evento "resize"
onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

// Remove listener ao desmontar o componente
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth)
})

// Store para gerenciar o tema
const darkStore = useDarkMode()

// Computado para verificar o estado do tema

const isDarkMode = computed(() => darkStore.isDarkMode)
</script>

<template>
  <section class="header-container-home">
    <div class="img-header">
      <img src="@/assets/icons/biasLogo.svg" alt="Bias Logo" />
    </div>

  </section>
</template>

<style scoped>
@import '@/assets/sass/home/_headerHome.scss';
</style>
