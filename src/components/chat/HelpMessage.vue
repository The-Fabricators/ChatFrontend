<script setup>
import { ref, onMounted } from 'vue'
import { useStaticDetailsStore } from '@/stores/staticDetails'
import { HelpButtons } from '@/components'

const staticDetailsStore = useStaticDetailsStore()
const propsContent = ref([])

onMounted(() => {
  propsContent.value = staticDetailsStore.getPathsAndTexts
  console.log(propsContent.value.paths)
})
</script>

<template>
  <div class="container-help">
    <h1 class="title">Como posso ajudar?</h1>
    <div class="container-buttons">
      <HelpButtons
        v-for="(item, index) in propsContent.paths"
        :key="index"
        :icon="item"
        :text="propsContent.texts[index]"
        :test="item[index]"
      />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/sass/chat/_help.scss';
</style>
