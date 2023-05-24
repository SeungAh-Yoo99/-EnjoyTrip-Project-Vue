import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSession from 'vue-session';
import store from "./store";


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var sessionOption={
  persist: true
}
Vue.use(VueSession, sessionOption)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
