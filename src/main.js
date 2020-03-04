import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
