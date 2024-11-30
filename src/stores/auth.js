import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { ref } from 'vue'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const state = useStorage('user', {
    user: {},
    isLogged: false,
    error: false,
    isLoading: ref(false),
  })

  async function getUser() {
    let data
    try {
      state.value.isLoading = true
      data = await useAuthStore.getUser()
    } catch (error) {
      console.log(error)
      error.value = true
    } finally {
      console.log(data)
      state.value.user = data
      state.value.isLogged = true
      state.value.isLoading = false
    }
  }
  function unsetToken() {
    state.value = {
      user: {},
      isLogged: false,
      error: false,
      isLoading: false,
      token: '',
    }
    localStorage.clear()
  }

  async function logout() {
    try {
      state.value.isLoading = true

      state.value = {
        user: {},
        isLogged: false,
        error: false,
        isLoading: false,
      }

      localStorage.clear()

      await router.push('/login')
    } catch (error) {
      console.error('Erro durante o logout:', error)
      state.value.error = true
    } finally {
      state.value.isLoading = false
    }
  }

  return {
    getUser,
    unsetToken,
    logout,
    state,
  }
})
