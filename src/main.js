import { createApp } from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

createApp(App).use(router).use(VueAxios, axios).mount("#app");
