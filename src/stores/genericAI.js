import { defineStore } from 'pinia'
import {  reactive } from 'vue'
import { GenericAIService } from '@/services/index'
import { useAnswersStore } from './answers'
import { useRoute } from 'vue-router'
// import { useStorage } from '@vueuse/core'

export const useGenericAIStore = defineStore('example', () => {
  const state = reactive({
    currentResponse: null,
    isLoading: false,
    error: null,
  })

  const route = useRoute()

  const answersStore = useAnswersStore()
  
  const postMessage = async (message) => {
    try {
        state.isLoading = true
        const response = await GenericAIService.postMessage(message)
        state.currentResponse = response.data
        await answersStore.GetAnswers(route.params.id)
        state.isLoading = false
    } catch (error) {
      console.log(error)
    }
  }

  return {
    state,
    postMessage,
  }
})
