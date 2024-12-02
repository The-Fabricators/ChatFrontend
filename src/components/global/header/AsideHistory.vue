<script setup>
import { ref } from 'vue'
import { HistoryList } from '@/components'
import { useChatStore } from '@/stores/chat';
import { useAuthStore } from '@/stores/auth';
import { useHeaderStore } from '@/stores/header';

const headerStore = useHeaderStore();

const chatStore = useChatStore()
const authStore = useAuthStore()

const user = authStore.state.user

function createNewChat(user) {
  chatStore.postChat(user)
}

 //object with history
</script>

<template>
  <div class="icon" @click="headerStore.showMenu = !headerStore.showMenu">
    <img src="@/assets/images/header/three-bars.png" alt="" />
  </div>
  <div class="background" :class="headerStore.showMenu ? 'active' : 'disable'">
    <!--The element is assigned the class 'active' or 'disable' based on the value of showMenu -->
    <div class="aside">
      <div class="buttons">
        <div @click="headerStore.showMenu = !headerStore.showMenu">
          <!-- close aside-history -->
          <img src="@/assets/images/header/closeX.png" />
        </div>
        <button @click="createNewChat(user)"><img src="@/assets/images/header/edit.png" alt="" /></button>
        <!-- Link to create a new chat -->
      </div>
      <div class="list">
        <HistoryList name="Hoje" :list="chatStore.chat" />
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
