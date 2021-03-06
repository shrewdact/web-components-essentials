import Vue from 'vue';
import App from './App.vue';
import 'web-component-essentials';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
