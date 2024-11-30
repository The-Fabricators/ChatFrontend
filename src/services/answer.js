import api from '@/plugins/api'

class AnswersService {
  async GetAnswers(id) {
    try {
      const response = await api.get(`/answers/?chat_id=${id}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new AnswersService()
