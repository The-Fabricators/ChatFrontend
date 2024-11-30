<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth';
import LoadComp from './components/global/loadPage/LoadComp.vue';

const authStore = useAuthStore();

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    console.log(error);
    authStore.unsetToken();
  }
};

onMounted(() => {
  getUserInfo();
  console.log(authStore.user)
});
</script>
<template>
  
  <div v-if="authStore.state.isLoading">
    <LoadComp />
  </div>
  <div v-else>
  <RouterView />
  </div>
</template>
