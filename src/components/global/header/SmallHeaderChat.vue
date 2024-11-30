<script setup>
import { CentralTheme, AsideHistory, AsideMobile } from '@/components'
import { useStaticDetailsStore } from '@/stores/staticDetails'

const staticDetailsStore = useStaticDetailsStore()
</script>

<template>
  <header>
    <div class="container-historic">
      <AsideHistory />
    </div>
    <div class="container-theme">
      <CentralTheme
        :text="staticDetailsStore.whichText"
        :color="staticDetailsStore.whichColorAndWidth"
      />
    </div>
    <div class="container-type-themes">
      <AsideMobile />
    </div>
  </header>
</template>

<style scoped>
@use '@/assets/sass/global/_header.scss';
</style>
