<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef, computed } from 'vue';
import { BtnStroke } from '@/components/index';
import { useDarkMode } from '@/stores/darkMode.js'; // Store para gerenciar tema

// Estado para largura da tela
const widthScreen = ref(window.innerWidth);

// Função para atualizar largura da tela ao redimensionar
function updateWidth() {
  widthScreen.value = window.innerWidth;
}

// Adiciona listener ao evento "resize"
onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

// Remove listener ao desmontar o componente
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth);
});

// Store para gerenciar o tema
const darkStore = useDarkMode();

// Computado para verificar o estado do tema

const isDarkMode = computed(()=> darkStore.isDarkMode)
</script>

<template>
  <section class="header-container-home">
    <div class="img-header">
      <img src="@/assets/icons/biasLogo.svg" alt="Bias Logo" />
    </div>
    <BtnStroke
      text="Entrar"
      padding="2px"
      border_radius="60px"
      :font_size="widthScreen < 600 ? '35px' : '17px'"
      :border="isDarkMode ? '3px solid white' : '3px solid black'"
      :color="isDarkMode ? 'white' : 'black'"
      :font_color_hover="isDarkMode ? 'white' : 'dark'"
      :background_color="isDarkMode ? 'white' : 'black'"
      :height="widthScreen < 600 ? '110px' : '55px'"
      font_weight="600"
      :width="widthScreen < 600 ? '300px' : '130px'"
    />
  </section>
</template>

<style scoped>
@import '@/assets/sass/home/_headerHome.scss';
</style>
