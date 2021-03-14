import Vue from "vue";
import App from "./App.vue";
import moment from 'moment'
import store from "./store.js";
import titleMixin from './mixins/titleMixin'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faChevronRight, faShareAlt, faFont } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';
library.add(faArrowUp, faChevronRight, faShareAlt, faFont);
library.add(faFacebook, faTwitter, faInstagram, faYoutube, faTelegram);

Vue.mixin(titleMixin)

Vue.config.productionTip = false;
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment.unix(String(value)).format('MMMM DD, YYYY')
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
