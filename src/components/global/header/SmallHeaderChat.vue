<script setup>
import { CentralTheme, AsideHistory } from "@/components";
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
            <img src="@/assets/images/header/widget.png" alt="">
        </div>
    </header>
</template>

<style scoped>
@import '@/assets/sass/global/_header.scss';
</style>