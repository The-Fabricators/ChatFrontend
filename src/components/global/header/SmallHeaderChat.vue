<script setup>

import { CentralTheme, AsideSelectorDesktop, AsideHistory, AsideMobile } from "@/components";
import { useRoute } from "vue-router";
import { whichText, whichColor } from "@/utils";

const route = useRoute();
</script>

<template>
    <header>
        <div class="container-historic">
            <AsideHistory/>
        </div>
        <div class="container-theme">
            <CentralTheme :text="whichText(route)" :color="whichColor(route)" />
        </div>
        <div class="container-type-themes">
            <AsideMobile />
        </div>
    </header>
</template>

<style scoped>
@import '@/assets/sass/global/_header.scss';
</style>