<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
defineProps({
  open: Boolean, // Controls whether the button displays text alongside the icon.
  dark: Boolean, // Determines which version of the SVG icon is displayed (dark or light mode).
})
</script>

<template>
  <div class="logout-button">
    <button @click="authStore.logout()">
      <!-- Conditionally renders a different SVG icon based on the 'dark' prop -->
      <svg
        v-if="dark"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.3333 17L28 12M28 12L21.3333 7M28 12H12M16 17C16 17.93..."
          stroke="#6B6B6B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- Alternative SVG icon displayed when 'dark' is false -->
      <svg
        v-else
        width="26"
        height="20"
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3333 15L25 10M25 10L18.3333 5M25 10H9M13 15C13 15.93..."
          stroke="#A3A3A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- Displays "Log Out" text only if 'open' is true -->
      <span v-if="open">Log Out</span>
    </button>
  </div>
</template>

<style scoped>
@use '@/assets/sass/global/_asideIaSelector.scss';
/* Imports global SCSS styles specific to this component */
</style>
