import { createApp } from "vue";
import App from "@/App.vue";
import * as UILibrary from "@/index";
import "@/bootstrap/bootstrap.customized.scss"; // Bootstrap CSS
import "bootstrap"; // Bootstrap JS

const app = createApp(App);

app.use(UILibrary.default);

app.mount("#app");
