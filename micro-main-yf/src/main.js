import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import startQiankun from "./micro";
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.use(Element)

Vue.config.productionTip = false

startQiankun()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#rootApp')
