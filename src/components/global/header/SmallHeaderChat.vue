<script setup>
import { useRoute } from "vue-router";
import { CentralTheme } from "@/components";
import { whichText, whichColorAndWidth } from "@/utils";

const route = useRoute();
</script>

<template>
    <header>
        <div class="container-historic">
            <img src="@/assets/images/header/three-bars.png" alt="">
        </div>
        <div class="container-theme">
            <CentralTheme :text="whichText(route)" :color="whichColorAndWidth(route)" />
        </div>
        <div class="container-type-themes">
            <img src="@/assets/images/header/widget.png" alt="">
        </div>
    </header>
</template>

<style scoped>
@import '@/assets/sass/global/_header.scss';
</style>