import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia' // Импортируем Pinia
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // Сначала Pinia
app.use(router)        // Потом Router

app.mount('#app')
