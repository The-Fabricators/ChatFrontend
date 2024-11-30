<script setup>
import { ref } from "vue"; 
import { useTemplateStore } from "@/stores/template/template"; 
import DarkMode from "@/components/darkMode/DarkMode.vue";
import { IaTitles, AsideUser, ButtonLogout } from "@/components"; 

const templateStore = useTemplateStore(); // Accesses template data from the store.

const showMenu = ref(false); // Reactive variable to toggle the visibility of the aside menu.
const open = ref(true); // Reactive variable to control whether names/icons are fully shown or minimized.
const dark = ref(true); // Reactive variable to toggle between dark and light themes.
</script>

<template>
    <div class="container-aside-mobile">
        <!-- Icon to toggle the aside menu visibility -->
        <div class="icon" @click="showMenu = !showMenu">
            <img src="@/assets/images/header/widget.png" alt="menu">
        </div>

        <!-- Background div with dynamic class based on 'showMenu' state -->
        <div class="background" :class="showMenu ? 'active' : 'disable'">
            <div class="aside">
                <!-- Close button to hide the aside menu -->
                <div class="icon close-icon" @click="showMenu = !showMenu">
                    <img src="@/assets/images/header/closeX.png" alt="X">
                </div>

                <!-- Displays user information, controlled by the 'open' prop -->
                <AsideUser :open="open" />

                <div class="ias-list">
                    <ul>
                        <!-- Generates a list item (li) for each title in the template store -->
                        <IaTitles class="ias-titles" 
                                  v-for="item in templateStore.iasTypes" 
                                  :key="item.Text" 
                                  :text="item.Text" 
                                  :icon="item.Icon" 
                                  :open="open" />
                    </ul>
                </div>

                <!-- Logout button with 'open' and 'dark' props to control appearance and theme -->
                <ButtonLogout :open="open" :dark="dark" />
                <div class="align-dark align-middle"><DarkMode /></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/sass/global/_asideIaSelector.scss'; 
/* Imports global SCSS styles, scoped to this component to prevent affecting other elements */
</style>
