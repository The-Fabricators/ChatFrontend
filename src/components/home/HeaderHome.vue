<script setup>
import {BtnStroke} from '@/components/index';

</script>

<template>
    <section class="header-container-home">
        <div class="img-header">
            <img src="@/assets/icons/biasLogo.png" alt="">
        </div>
        <BtnStroke text="Entrar" padding="2px" border_radius="40px" font_size="15px" border="1.5px solid black" height="40px" font_weight="600" width="100px" />
    </section>
</template>

<style scoped>
@import '@/assets/sass/home/_headerHome.scss';
</style>
