import Vue from 'vue'
import App from './App.vue'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './assets/css/common.css'
Vue.config.productionTip = false
Vue.config.devtools = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
