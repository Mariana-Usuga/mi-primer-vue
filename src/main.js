import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import router from './assets/router/index'


const app = createApp(App)
app.use(router)
app.mount('#app')
