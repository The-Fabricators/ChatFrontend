<script setup>
// defined properties
const props =defineProps({
  list: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
});
</script>

<template>
      <div  class="aside-history">
        <h3>{{ props.name }}</h3>
        <!-- v-for which shows the history from date -->
        <ul v-for="(item, index) in props.list" :key="index">
            <li>{{ item }}</li>
        </ul>
      </div>
</template>

<style scoped>
@use '@/assets/sass/global/_asideHistory.scss';
</style>
