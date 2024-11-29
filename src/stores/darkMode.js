import { defineStore } from 'pinia';

export const useDarkMode = defineStore('theme', {
  state: () => ({
    isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false, // Load the initial state
  }),

  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;

      // Save the preference to localStorage
      localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));

      // Add or remove class globally
      const root = document.documentElement;
      if (this.isDarkMode) {
        root.classList.add('dark-mode');
      } else {
        root.classList.remove('dark-mode');
      }
    },
  },
});
