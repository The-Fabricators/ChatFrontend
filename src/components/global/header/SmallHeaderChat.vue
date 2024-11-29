<script setup>

import { CentralTheme, AsideSelectorDesktop, AsideHistory } from "@/components";
import { useRoute } from "vue-router";
import { CentralTheme } from "@/components";
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
            <AsideSelectorDesktop/>
        </div>
    </header>
</template>

<style scoped>
@import '@/assets/sass/global/_header.scss';
</style>