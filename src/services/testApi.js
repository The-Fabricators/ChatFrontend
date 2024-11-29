import api from '@/plugins/api'

const { data } = api.get('/users/me')

export default data
