import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { createStore } from 'vuex'


import 'flowbite';



// const store = createStore({
//     state () {
//       return {
//         count: 0
//       }
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     }
//   })

// app.use(store)

import App from './App.vue'
import router from './router'

//import './assets/main.css'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
