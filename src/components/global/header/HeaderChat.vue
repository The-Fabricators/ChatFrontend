<script setup>
import { NormalHeaderChat, SmallHeaderChat } from "@/components";
import { useResponsivity } from "@/composables/responsivity";

const currentSize = useResponsivity();

</script>

<template>
    <NormalHeaderChat v-if="currentSize == 'desktop'" />
    <SmallHeaderChat v-else />
</template>

<style scoped>
</style>