import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify.js"; // path to vuetify export
import router from "./router.js";
import store from "./store.js";
import bus from "./bus.js";

$(document).on("shiny:connected", function (event) {
  new Vue({
    vuetify,
    store,
    router,
    template: "<App/>",
    components: { App },
  }).$mount("#app");

  const rBus = function (message) {
    bus.emit("r2vue", message);
  };

  Shiny.addCustomMessageHandler("r2vue", rBus);

  const rVuex = function (message) {
    store.commit(message.mutation, message.value);
  };

  Shiny.addCustomMessageHandler("r2vuex", rVuex);

  const rVuexSetState = function (message) {
    store.commit("setState", message);
  };

  Shiny.addCustomMessageHandler("rVuexSetState", rVuexSetState);
});
