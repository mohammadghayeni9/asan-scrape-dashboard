import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCountdown from '@chenfengyuan/vue-countdown'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component(VueCountdown.name, VueCountdown)

app.mount('#app')
