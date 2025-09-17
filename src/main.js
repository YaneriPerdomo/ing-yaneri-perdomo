import "./assets/css/components/_content.css";
import "./assets/css/layouts/base.css";

import "./assets/js/layouts/base.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

