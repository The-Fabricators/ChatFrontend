<script setup>
import { HeaderHome } from '@/components';
</script>
<template>
    <main class="main-home">
        <div class="home-container">
        <HeaderHome />
        </div>

        <div class="elements-container">
        <div class="eva-container">
            <img src="@/assets/images/eva.svg" alt="">
        </div>

        <div class="info-home-container">
            <div class="i-as-container">
            <h1 class="text t1">I as</h1>
            <h1 class="text t2"></h1>
            </div>
            <p class="text t3">an AI to help you with the ENEM and entrance exams</p>
        </div>
        </div>
    </main>
</template>
<style scoped>
@import '@/assets/sass/home/_home.scss';
</style>
