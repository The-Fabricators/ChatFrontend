import api from '@/plugins/api'

class AuthService {
  async createAuthentication(avaliator) {
    try {
      const { data } = await api.post('/token/', avaliator)
      console.log('Validate token successfuly' + data)
      return data
    } catch (error) {
      console.log('Erro ao validar token' + error)
      return error
    }
  }
  async getUser(token) {
    const response = await api.get('/users/me/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}

export default new AuthService()
