<script setup>
import { CentralTheme, AsideHistory } from "@/components";
</script>

<template>
    <header>
        <div class="container-historic">
            <AsideHistory/>
        </div>
        <div class="container-theme">
            <CentralTheme text="Geral" color="background-color: #DCDCDC;" />
        </div>
        <div class="container-type-themes">
            <img src="@/assets/images/header/widget.png" alt="">
        </div>
    </header>
</template>

<style scoped>
@import '@/assets/sass/global/_header.scss';
</style>