import { createApp } from "./app";
const isDev = process.env.NODE_ENV !== "production";
import Vue from "vue";
import ULink from "./components/ULink.server.vue";
Vue.component("u-link", ULink);

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    const s = isDev && Date.now();

    // url in router ?
    const { url } = context;
    const { fullPath } = router.resolve(url).route;

    if (fullPath !== url) {
      return reject({
        url: fullPath,
      });
    }

    router.push(url);
    router.onReady(() => {
      // 1. 根据路由表信息获得路由组件信息
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }
      // /a/b/c
      // /a => A asyncData
      // /b => B asyncData
      // /c => C asyncData

      Promise.all(
        matchedComponents.map(
          ({ asyncData }) =>
            asyncData && asyncData({ store, route: router.currentRoute })
        )
      )
        .then(() => {
          isDev && console.log(`data-fetched in: ${Date.now() - s}ms`);
          context.state = store.state;
          resolve(app);
        })
        .catch(reject);
    });
  });
};
