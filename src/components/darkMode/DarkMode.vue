<script setup>
import { useDarkMode } from '@/stores/darkMode.js';
import { onMounted, ref } from 'vue';

// Pinia store para gerenciar o tema
const themeStore = useDarkMode();

// Sincronizar estado inicial no carregamento
onMounted(() => {
    if (themeStore.isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
});

// Função para alternar o tema
const toggleTheme = () => {
    themeStore.toggleDarkMode();

    // Garantir que o tema seja aplicado corretamente no documento
    if (themeStore.isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }

    // Sincronizar o valor do isDarkMode
    isDarkMode.value = themeStore.isDarkMode;
};

// Obter o estado do tema
const isDarkMode = ref(themeStore.isDarkMode);
</script>


<template>
    <div class="container">
        <div class="public">
            <label class="switch" :class="{ 'active': themeStore.isDarkMode }">
                <span class="sun" v-if="!isDarkMode">
                    <img src="@/assets/images/darkMode/lua.svg" alt="">
                </span>
                <span class="moon" v-else>
                    <img src="@/assets/images/darkMode/sol.svg" alt="">
                </span>
                <input type="checkbox" class="input" :checked="isDarkMode" @change="toggleTheme">
            </label>
        </div>
    </div>
</template>

<style lang="scss">
@media (min-width: 425px) {
    .sun svg {
        display: block;
    }
}
.sun svg {
    display: none;
}
:root {
    --bg-color: #ffffff;
    --text-color: #000000;
    --aside-background: #ECECEC;
}

.dark-mode {
    --bg-color: #121212;
    --text-color: #ffffff;
    --aside-background: #303030;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
}

.switch {
    font-size: 17px;
    position: relative;
    display: flex;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // width: 64px;
>>>>>>> 0995d3f (FIX: rebase fixed)
=======
>>>>>>> 3d38528 (FEAT: chat dark mode #41)
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.sun svg {
    position: absolute;
    top: 6px;
    left: 36px;
    z-index: 1;
    width: 24px;
    height: 24px;
}

.moon svg {
    fill: #73C0FC;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    width: 24px;
    height: 24px;
}

.sun svg {
    animation: rotate 15s linear infinite;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
@keyframes rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.moon svg {
    animation: tilt 5s linear infinite;
}

@keyframes tilt {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-10deg);
    }
    75% {
        transform: rotate(10deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>
