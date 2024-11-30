<script setup>
import { ref } from "vue";  
import { useTemplateStore } from "@/stores/template/template"; 
import DarkMode from "@/components/darkMode/DarkMode.vue";
import { IaTitles, AsideUser, ButtonLogout } from "@/components"; 
import router from "@/router";

const templateStore = useTemplateStore(); // Reactive variable to access titles from the template store.
const open = ref(false); // Reactive variable to control sidebar state (open or closed).
const dark = ref(true); // Reactive variable to toggle between dark and light themes.
</script>

<template>
    <div>
            <!-- Applies a class based on the 'open' variable: 'aside-desktop' when open, 'aside-close' when closed -->
            <div class="container-desktop" :class="open ? 'aside-desktop' : 'aside-close'">
                <!-- Toggles between 'open' and 'close' classes and handles click event to toggle 'open' state -->
                <div :class="open ? 'open' : 'close'" @click="open = !open">
                    <!-- Renders different SVGs based on the 'dark' variable -->
                    <svg v-if="dark" 
                         width="7" 
                         height="12" 
                         viewBox="0 0 7 12" 
                         fill="none" 
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.97924 1.00834L5.99998 5.99168L2.02079 11.0083" 
                              fill="#E0E0E0"/>
                        <path d="M1.97924 1.00835L5.99998 5.99168L2.02079 11.0083" 
                              stroke="#3E3E3E" 
                              stroke-width="2" 
                              stroke-linecap="round" 
                              stroke-linejoin="round"/>
                    </svg>
                    <svg v-else 
                         width="6" 
                         height="12" 
                         viewBox="0 0 6 12" 
                         fill="none" 
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 11L1 6L5 1" 
                              stroke="white" 
                              stroke-width="2" 
                              stroke-linecap="round" 
                              stroke-linejoin="round"/>
                    </svg>                        
                </div>

                <!-- AsideUser component with the 'open' prop to control its state -->
                <AsideUser :open="open" />

                <div class="ias-list">
                    <ul>
                        <!-- Iterates over 'iasTypes' from the store to generate a list of IaTitles components -->
                        <IaTitles v-for="item in templateStore.iasTypes" 
                                  :key="item.Text" 
                                  :text="item.Text" 
                                  :icon="item.Icon" 
                                  :open="open"
                                  :pathRoute="item.Path" />
                    </ul>
                </div>

                <!-- ButtonLogout component with 'open' and 'dark' props to control appearance and theme -->
                <ButtonLogout :open="open" :dark="dark" />
                <div class="align-dark" :class="{'align-middle': !open, 'align-end': open}"><DarkMode /></div>
            </div>
        </div>
</template>

<style scoped>
@import '@/assets/sass/global/_asideIaSelector.scss'; 
/* Imports global SCSS styles, scoped to this component to avoid affecting other elements */
</style>
