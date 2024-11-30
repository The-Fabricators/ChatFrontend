import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import AnswersService from '@/services/answer'

export const useAnswersStore = defineStore('answers', () => {
  const answers = ref([]);
  const state = reactive({
    isTyping: false
  });

  const GetAnswers = async (user) => {
    state.isTyping = true
    answers.value = await AnswersService.GetAnswers(user)
    state.isTyping = false
  }

  return { GetAnswers, state, answers }
})
