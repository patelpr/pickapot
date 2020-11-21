import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {firestorePlugin} from 'vuefire';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';


Vue.use(firestorePlugin);
Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyB2gN1SBpaZDS2ropZ2D6oIm9ibGc0uYx0', // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
});
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
