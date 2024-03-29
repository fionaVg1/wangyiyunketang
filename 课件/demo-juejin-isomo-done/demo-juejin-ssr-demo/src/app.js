import Vue from "vue";
import App from "./App.vue";
import { createStore } from "./store";
import { createRouter } from "./router";
import intersect from "./directive/intersect";

import { init as themeInit } from "./config/theme";
import { init as permissionInit } from "./config/permission";

Vue.directive("intersect", intersect);
// app.$mount("#app");

//暴露工厂函数，避免请求状态被污染
export function createApp() {
  const store = createStore();
  const router = createRouter({ store });

  themeInit();
  permissionInit();

  const app = new Vue({
    store,
    router,
    render: (h) => h(App),
  });

  return {
    app,
    store,
    router,
  };
}
