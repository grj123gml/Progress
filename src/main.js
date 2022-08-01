import Vue from 'vue'
import App from './App.vue'
import FzUi from './components/index'

Vue.use(FzUi)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
