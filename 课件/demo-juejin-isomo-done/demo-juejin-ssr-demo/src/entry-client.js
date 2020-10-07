import { createApp } from "./app";
import Vue from "vue";
const { app, router, store } = createApp();
import ULink from "./components/ULink.client.vue";
Vue.component("u-link", ULink);

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const { asyncData } = this.$options;

    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to,
      })
        .then(() => next)
        .catch(next);
    } else {
      next();
    }
  },
});

router.onReady(() => {
  app.$mount("#app");
});

//
// <div></div>
// <table>  <tbody><tr><td></td></tr></tbody>  </table>
