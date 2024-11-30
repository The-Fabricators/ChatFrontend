import './assets/imports.css'
import './assets/sass/_main.scss'
// import { setupInterceptors } from '@/plugins/axios'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import pinia from './plugins/pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(createPinia())

app.use(pinia)
app.use(router)

app.mount('#app')

// setupInterceptors()
