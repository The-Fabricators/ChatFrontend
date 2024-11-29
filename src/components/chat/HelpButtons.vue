<script setup>
import { createUrl } from '@/utils';
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    test: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="container-button">
        <img :src="createUrl(props.icon)" alt="">
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
@import '@/assets/sass/chat/_helpButtons.scss';
</style>