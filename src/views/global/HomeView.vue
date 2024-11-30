<script setup>
  import { HeaderHome, DefaultBtn } from '@/components';
  import DarkMode from '@/components/darkMode/DarkMode.vue';
  import { useDarkMode } from '@/stores/darkMode.js';
  import { computed } from 'vue';
  
  // Acessando a store para controle do tema
  const darkStore = useDarkMode();
  
  // Computado para verificar o estado do tema
  const isDarkMode = computed(() => darkStore.isDarkMode);
  
  // Importação de imagens
  import lightImage from '@/assets/images/eva.png';
  import darkImage from '@/assets/images/darkMode/eva-white.png';
  
  // Alternar o tema
  function toggleTheme() {
    darkStore.toggleDarkMode(); // Função de alternar tema da store
  }
  </script>
  
  <template>
    <main class="main-home">
      <div class="home-container">
        <HeaderHome />
      </div>
  
      <div class="elements-container">
        <div class="eva-container">
          <!-- Alteração dinâmica da imagem -->
          <img :src="isDarkMode ? darkImage : lightImage" alt="Eva logo" />
        </div>
  
        <div class="info-home-container">
          <div class="i-as-container">
            <h1 class="text t1">I as</h1>
            <h1 class="text t2"></h1>
          </div>
          <p class="text t3">an AI to help you with the ENEM and entrance exams</p>
          <!-- Botão de alternar tema -->
          <DefaultBtn style="margin-top: 20px;" text="Fazer Login" padding="2px" border_radius="60px" :font_size="widthScreen < 600 ?'35px' : '17px'" :border="widthScreen < 600 ? '3px solid black' : '2px solid black'" :height="widthScreen < 600 ? '110px' : '55px'" font_weight="600" :width="widthScreen < 600 ? '300px' : '220px'" color="white" />
         <div class="container-down-info">
         <DarkMode @toggle="toggleTheme" />
          <p>{{ isDarkMode ? 'Modo Claro' : 'Modo Escuro' }}</p>
         </div>
        </div>
      </div>
    </main>
  </template>
  
  <style scoped>
  @import '@/assets/sass/home/_home.scss';
  </style>
 