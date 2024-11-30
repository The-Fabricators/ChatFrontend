<script setup>
import { useRoute } from "vue-router";
import { whichText, whichColorAndWidth } from "@/utils";
import { CentralTheme, AsideDesktop, AsideHistory } from "@/components";



const route = useRoute();
</script>

<template>
  <header>
    <div class="container-historic">
            <AsideHistory />
            <img src="@/assets/images/header/logo.png" class="logo" alt="">
        </div>
        <div class="container-theme">
            <CentralTheme :text="whichText(route)" :color="whichColorAndWidth(route)" />
        </div>
        <div class="container-type-themes">
           <AsideDesktop />
        </div>
  </header>
</template>

<style scoped>
@import '@/assets/sass/global/_header.scss';
</style>