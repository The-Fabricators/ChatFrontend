<script setup>
import { CentralTheme, AsideDesktop, AsideHistory } from '@/components'
import { useStaticDetailsStore } from '@/stores/staticDetails'

const staticDetailsStore = useStaticDetailsStore()
</script>

<template>
  <header>
    <div class="container-historic">
      <AsideHistory />
      <router-link to="/">
        <img src="@/assets/images/header/logo.png" class="logo" alt="" />
      </router-link>
    </div>
    <div class="container-theme">
      <CentralTheme :text="staticDetailsStore.whichText" :color="staticDetailsStore.whichColor" />
    </div>
    <div class="container-type-themes">
      <AsideDesktop />
    </div>
  </header>
</template>

<style scoped>
@use '@/assets/sass/global/_header.scss';
</style>
