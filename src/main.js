import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

const firebaseConfig = {
  apiKey: 'AIzaSyB2EyrZiAHXdjnvtAs8b3LTOrSa45sFw1E',
  authDomain: 'vue-crm-38786.firebaseapp.com',
  projectId: 'vue-crm-38786',
  storageBucket: 'vue-crm-38786.appspot.com',
  messagingSenderId: '836893036461',
  appId: '1:836893036461:web:db74de083fca1974839b24',
  measurementId: 'G-NNY6VQ798H'
}
const app = initializeApp(firebaseConfig)

createApp(App).use(store).use(router).use(app).mount('#app')
