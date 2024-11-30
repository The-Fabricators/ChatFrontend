import { ref } from 'vue'
import { defineStore } from 'pinia'
import Chat from '@/services/chat'

export const useChatStore = defineStore('chat', () => {
  const chat = ref([])
  const currentChat = ref({})

  const getChat = async (user) => {
    chat.value = await Chat.getChat(user)
    return chat.value
  }

  const getChatById = async (id) => {
    currentChat.value = await Chat.GetChatById(id)
  }

  const postChat = async (data) => {
    chat.value.push(await Chat.postChat(data))
  }

  return { getChat, postChat, getChatById }
})
