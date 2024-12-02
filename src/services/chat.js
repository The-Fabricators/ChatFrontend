import api from '@/plugins/api'

class Chat {
  async getChat(user) {
    try {
      const { data } = await api.get(`/chats/?user_id=${user}`)
      return data
    } catch (error) {
      console.error('Error in GET Chats: ', error)
      return false
    }
  }

  async postChat(newdata) {
    try {
      const { data } = await api.post('/chats/', newdata)
      return data
    } catch (error) {
      console.error('Error in GET Chats: ', error)
      return false
    }
  }

  async GetChatById(id) {
    try {
      const { data } = await api.get(`/chats/${id}/`)
      return data
    } catch (error) {
      console.error('Error in GET Chats: ', error)
      return false
    }
  }
}

export default new Chat()
