import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
export default new Vuetify(opts)
const opts = {}
Vue.use(Vuetify)
Vue.config.productionTip = false;
Vue.use(NowUiKit);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
