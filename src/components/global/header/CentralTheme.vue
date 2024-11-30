<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})
</script>

<template>
    <button :style="props.color" class="theme">
        {{ props.text }}
    </button>
</template>

<style scoped>
@use '@/assets/sass/global/_centralTheme.scss';
</style>
