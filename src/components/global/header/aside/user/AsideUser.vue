<script setup>
defineProps({
    open: Boolean   // Accepts a boolean to control the display state (open or closed).
})
</script>

<template>
    <div class="user">
        <!-- Dynamically applies a CSS class based on the value of 'open' -->
        <img :class="open ? 'user-img' : 'user-img-close'"
             src="@/assets/images/header/user-img.jpeg"
             alt="X">

        <!-- Displays the email only if 'open' is true -->
        <span v-if="open">vinicius@gmail.com</span>
    </div>
</template>

<style scoped>
    @use '@/assets/sass/global/_asideIaSelector.scss';
    /* Imports global SCSS styles, scoped to ensure they only affect this component */
</style>
