<script setup>
import { CentralTheme, AsideDesktop, AsideHistory } from '@/components'
import { useRoute } from 'vue-router'
import { useStaticDetailsStore } from '@/stores/staticDetails'

const staticDetailsStore = useStaticDetailsStore()
const route = useRoute()
</script>

<template>
  <header>
    <div class="container-historic">
      <AsideHistory />
      <img src="@/assets/images/header/logo.png" class="logo" alt="" />
    </div>
    <div class="container-theme">
      <CentralTheme :text="staticDetailsStore.whichText" :color="staticDetailsStore.whichColor" />
    </div>
    <!-- <div class="container-type-themes">
      <AsideDesktop />
    </div> -->
  </header>
</template>

<style scoped>
@import '@/assets/sass/global/_header.scss';
</style>
