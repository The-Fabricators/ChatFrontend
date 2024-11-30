<script setup>
import { ref } from 'vue'
import { HistoryList } from '@/components'

const showMenu = ref(false) // Variable to hide/show aside
const history = {
  yesterday: ['lorem', 'lorem', 'lorem', 'lorem'],
  last7Days: ['lorem', 'lorem'],
  last30Days: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem', 'lorem'],
} //object with history
</script>

<template>
  <div class="icon" @click="showMenu = !showMenu">
    <img src="@/assets/images/header/three-bars.png" alt="" />
  </div>
  <div class="background" :class="showMenu ? 'active' : 'disable'">
    <!--The element is assigned the class 'active' or 'disable' based on the value of showMenu -->
    <div class="aside">
      <div class="buttons">
        <div @click="showMenu = !showMenu">
          <!-- close aside-history -->
          <img src="@/assets/images/header/closeX.png" />
        </div>
        <RouterLink to="/"><img src="@/assets/images/header/edit.png" alt="" /></RouterLink>
        <!-- Link to create a new chat -->
      </div>
      <div class="list">
        <HistoryList name="Ontem" :list="history.yesterday" />
        <HistoryList name="7 dias anteriores" :list="history.last7Days" />
        <HistoryList name="30 dias anteriores" :list="history.last30Days" />
      </div>
      <div class="footer-aside">
        <div class="circle-icon">
          <img src="@/assets/images/header/plane.png" alt="" />
        </div>
        <div>
          <RouterLink to="/subscription-plan">
            <h2>Fazer upgrade de plano</h2>
            <span>Acesse os melhores modelos</span>
          </RouterLink>
          <!-- link to access the plans page -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/sass/global/_asideHistory.scss';
</style>
