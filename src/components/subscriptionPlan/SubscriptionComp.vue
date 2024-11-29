<script setup>
import FreeSubscription from './FreeSubscription.vue';
import PremiumSubscription from './PremiumSubscription.vue';
</script>
<template>
    <section> <FreeSubscription />
        <PremiumSubscription />
     </section>
</template>
<style scoped>
@import "@/assets/sass/_subscription.scss";
</style>