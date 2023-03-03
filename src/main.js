import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import mitt from './mitt'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$serverUrl = '//localhost:8086'
app.use(store).use(router).use(BootstrapVue3).use(mitt).mount('#app')

import './assets/commons.css'
