import api from '@/plugins/api'

class AuthService {
  // async createAuthentication(avaliator) {
  //   try {
  //     const { data } = await api.post('/token/', avaliator)
  //     console.log('Validate token successfuly' + data)
  //     return data
  //   } catch (error) {
  //     console.log('Erro ao validar token' + error)
  //     return error
  //   }
  // }
  async getUser() {
    try {
      const response = await api.get('/users/me/')
      return response.data
    } catch (error) {
      console.error('Error in GET User: ', error)
      return false
    }
  }
}

export default new AuthService()
