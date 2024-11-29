<script setup>
import { useDarkMode } from '@/stores/darkMode.js';
import { onMounted } from 'vue';
// Pinia store to manage the theme
const themeStore = useDarkMode();
// Synchronize initial state on load
onMounted(() => {
    // Ensure button state reflects current theme
    if (themeStore.isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
});
// Function to switch the theme
const toggleTheme = () => {
    themeStore.toggleDarkMode();
};
</script>
<template>
    <div class="container">
        <div class="public">
            <p>Alternador de Tema</p>
            <!-- Button Toggle -->
            <div class="switch" :class="{ 'active': themeStore.isDarkMode }" @click="toggleTheme">
                <div class="slider">
                    <!-- Icon light sun -->
                    <img v-if="!themeStore.isDarkMode" src="@/assets/images/darkMode/sol.png" alt="Sol">
                    <!-- Icon dark moon -->
                    <img v-else src="@/assets/images/darkMode/lua-crescente.png" alt="Lua">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/darkmode/_darkMode.scss";
</style>
