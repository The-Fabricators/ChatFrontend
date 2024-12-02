<script setup>
import { useChatStore } from '@/stores/chat';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useHeaderStore } from '@/stores/header';
import { useAnswersStore } from '@/stores/answers';

const headerStore = useHeaderStore();
const authStore = useAuthStore();
const chatStore = useChatStore();
const answerStore = useAnswersStore();
const router = useRouter();

function changeChat(item) {
  router.push({ name: 'genericAI', params: { id: item.id } }); 
  headerStore.showMenu = !headerStore.showMenu
  answerStore.GetAnswers(item.id)
}

onMounted(async () => {
  await chatStore.getChat(authStore.state.user);
});

// defined properties
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="aside-history">
    <h3>{{ props.name }}</h3>
    <!-- v-for which shows the history from date -->
    <ul v-for="(item, index) in chatStore.chat" :key="index">
      <li @click="changeChat(item)">{{ item.chat_name }}</li>
    </ul>
  </div>
</template>

<style scoped>
@import '@/assets/sass/global/_asideHistory.scss';
</style>
