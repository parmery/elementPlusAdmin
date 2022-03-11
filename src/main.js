import { createApp } from "vue";

import "normalize.css/normalize.css"; // CSS 重置的现代替代方案

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import "@/styles/index.scss";
import installIcons from "@/icons";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
installIcons(app);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(store);
app.use(router);
app.mount("#app");
