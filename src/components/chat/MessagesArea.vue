<script setup>
import { useRoute } from 'vue-router';
import { whichColor } from '@/utils';

const route = useRoute();
</script>

<template>
  <div class="container-father-messages">
    <div class="container-day-messages">
        <h2 class="day">29 de Novembro</h2>
        <div class="container-messages">
            <div class="container-my-message" :style="whichColor(route)">
                <p>Artigos científicos sobre redação</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/sass/chat/_messages.scss';
</style>