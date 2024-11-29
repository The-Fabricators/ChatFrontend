<script setup>
import { CentralTheme, AsideIaSelector } from "@/components";
</script>

<template>
    <header>
        <div class="container-historic">
            <img src="@/assets/images/header/three-bars.png" alt="">
        </div>
        <div class="container-theme">
            <CentralTheme text="Geral" color="background-color: #DCDCDC;" />
        </div>
        <div class="container-type-themes">
            <AsideIaSelector />
        </div>
    </header>
</template>

<style scoped>
@import '@/assets/sass/global/_header.scss';
</style>