import { createApp } from "vue";
import "normalize.css/normalize.css"; // CSS 重置的现代替代方案
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
