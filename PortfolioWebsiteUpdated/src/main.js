import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { createVuetify } from "vuetify";
import "vuetify/styles"; // Required for Vuetify styling

const vuetify = createVuetify();

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
