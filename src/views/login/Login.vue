<template>
  <passage-auth :app-id="appId"></passage-auth>
</template>

<script setup>
import '@passageidentity/passage-elements/passage-auth'

const appId = import.meta.env.VITE_PASSAGE_APP_ID
</script>
