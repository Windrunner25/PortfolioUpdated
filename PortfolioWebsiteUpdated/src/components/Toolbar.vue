<template>
  <v-app-bar :elevation="2">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </v-app-bar>
</template>

<script>
import { RouterLink } from "vue-router";
</script>
