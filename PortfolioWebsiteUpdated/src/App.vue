<template>
  <v-app>
    <div class="vue_styling">
      <Toolbar />
      <main>
        <RouterView />
      </main>
    </div>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import db from "./firebase/init.js";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "App",
  components: {
    Toolbar,
  },
};
</script>

<style></style>
