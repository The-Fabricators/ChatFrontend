import { ref } from 'vue'
import { defineStore } from 'pinia'
import Chat from '@/services/chat'
import { useRouter } from 'vue-router'
import { useHeaderStore } from './header'

export const useChatStore = defineStore('chat', () => {
  const chat = ref([])
  const currentChat = ref({})
  
  const router = useRouter()
  const headerStore = useHeaderStore()

  const getChat = async (user) => {
    const id = user.id
    chat.value = await Chat.getChat(id)
    return chat.value
  }

  const getChatById = async (id) => {
    currentChat.value = await Chat.GetChatById(id)
  }

  const postChat = async (data) => {
    const new_chat = {user: data.id, chat_name: 'chat número ' + (chat.value.length+1)}
    const response = await Chat.postChat(new_chat)
    headerStore.showMenu = false
    console.log(response, 'aaaaaaaa')
    chat.value.push(response)
    router.push({ name: 'genericAI', params: { id: response.id } })
  }

  return { getChat, postChat, getChatById, chat, currentChat }
})
