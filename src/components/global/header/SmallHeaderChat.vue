<script setup>

import { CentralTheme, AsideSelectorDesktop, AsideHistory, AsideMobile } from "@/components";
import { useRoute } from "vue-router";
import { useStaticDetailsStore } from "@/stores/staticDetails";

const staticDetailsStore = useStaticDetailsStore();
const route = useRoute();
</script>

<template>
    <header>
        <div class="container-historic">
            <AsideHistory/>
        </div>
        <div class="container-theme">
            <CentralTheme :text="staticDetailsStore.whichText" :color="staticDetailsStore.whichColorAndWidth" />
        </div>
        <div class="container-type-themes">
            <AsideMobile />
        </div>
    </header>
</template>

<style scoped>
@import '@/assets/sass/global/_header.scss';
</style>