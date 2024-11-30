<script setup>
import router from '@/router';

defineProps({
    text: String,   // Accepts a string for the item's label.
    icon: String,   // Accepts a string representing the URL/path for an icon.
    open: Boolean,   // Accepts a boolean to control the visibility of the text and line.
    pathRoute: String
})


</script>

<template>
    <li @click="router.push(pathRoute)" class="ia-item">
        <!-- Only displays the text if the 'open' prop is true -->
        <img :src="icon" alt=""> <!-- Dynamically binds the icon source -->
        <span class="title" v-if="open">{{ text }}</span> <!-- Displays the text when 'open' is true -->
    </li>
    <hr v-if="open" class="hr-titles"/> <!-- Shows a horizontal line only if 'open' is true -->
</template>

<style scoped>
@use '@/assets/sass/global/_asideIaSelector.scss';
/* Imports global SCSS styles specifically for this component */
</style>
