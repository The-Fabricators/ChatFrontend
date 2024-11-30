import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { GenericAIService } from '@/services/index'
// import { useStorage } from '@vueuse/core'

export const useGenericAIStore = defineStore('example', () => {
  const state = reactive({
    currentResponse: null,
    error: null,
    tema: null,
  })
  const postMessage = async (message) => {
    try {
        state.currentResponse = await GenericAIService.postMessage(message)
        state.tema = state.currentResponse.data.tema
        console.log(`TEMA DA PERGUNTA ${state.tema}`)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    state,
    postMessage,
  }
})
