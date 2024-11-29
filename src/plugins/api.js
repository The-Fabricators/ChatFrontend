import axios from 'axios'
import { Passage } from '@passageidentity/passage-js'

const apiUrl = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

api.interceptors.request.use(
  async (config) => {
    if (!config.skipAuth) {
      const jwt = localStorage.getItem('psg_auth_token')
      config.headers.Authorization = `Bearer ${jwt}`
      console.log(jwt)
    }
    return config
  },
  (error) => Promise.reject(error),
)

export default api
// instance.interceptors.request.use(
//   (config) => {
//     if (config.isAuthenticated) {
//       config.headers.Authorization = "Bearer 123";
//       console.log("Fazendo uma requisicao com auth");
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
