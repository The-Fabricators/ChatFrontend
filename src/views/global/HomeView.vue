<template>
  <h1>HOME</h1>
</template>

<script setup>
import api from '@/plugins/api.js'
import { onMounted } from 'vue'

onMounted(async () => {
  const { data } = await api.get('/users/me')
  console.log(data)
})
</script>
