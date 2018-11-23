import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VToolTip from "v-tooltip";

import "normalize.css";

Vue.use(VToolTip);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");