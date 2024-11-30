import { ref } from "vue";
import { defineStore } from "pinia";

export const useHeaderStore = defineStore('header', () => {
    const showMenu = ref(false); // Variable to hide/show aside
    const showClip = ref(true);

    return { showMenu, showClip };
});