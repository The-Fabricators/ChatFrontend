import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default api

// api.interceptors.request.use(
//   (config) => {
//     if (!config.skipAuth) {
//       config.headers.Authorization = `Bearer ${token}`
//       console.log('Fazendo uma requisicao com auth')
//     }
//     return config
//   },
//   (error) => Promise.reject(error),
// )

// export default api

/*
instance.interceptors.request.use(
  (config) => {
    if (config.isAuthenticated) {
      config.headers.Authorization = "Bearer 123";
      console.log("Fazendo uma requisicao com auth");
    }
    return config;
  },
  (error) => Promise.reject(error)
);
*/
