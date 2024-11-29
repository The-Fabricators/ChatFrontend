<script setup>
import { computed, shallowRef } from 'vue';
import {BtnStroke} from '@/components/index';
const hover = shallowRef(false)
const widthScreen = computed(()=> window.screen.width)
</script>

<template>
    <section class="header-container-home">
        <div class="img-header">
            <img src="@/assets/icons/biasLogo.png" alt="">
        </div>
        <BtnStroke @hover="hover = $event" :color="hover ? 'white' : 'black'" text="Entrar" padding="2px" border_radius="60px" :font_size="widthScreen < 600 ?'35px' : '17px'" :border="widthScreen < 600 ? '3px solid black' : '2px solid black'" :height="widthScreen < 600 ? '110px' : '55px'" font_weight="600" :width="widthScreen <600 ? '300px' : '130px'" />
    </section>
</template>

<style scoped>
@import '@/assets/sass/home/_headerHome.scss';
</style>
