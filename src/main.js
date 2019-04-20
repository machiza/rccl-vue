import Vue from "vue";

import router from "./router";

// import jQuery from "jquery";
window.$ = window.jQuery = require("jquery");

import "@fortawesome/fontawesome-free";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
