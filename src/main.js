import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

// 環境変数の導入
require('dotenv').config()

const app = createApp(App)

app.use(store)
app.use(router)

// global components
import Butt from './components/Butt.vue'
app.component('Butt', Butt)

app.mount('#app')