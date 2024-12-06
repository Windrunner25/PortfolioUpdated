<template>
  <div>
    <h1 style="margin-top: 50px">About</h1>
    <AboutImage />
    <hr />
    <AboutSkills />
    <hr />
    <AboutOil />
  </div>
</template>

<script setup lang="ts">
import AboutImage from "@/components/AboutComponents/AboutImage.vue";
import AboutOil from "@/components/AboutComponents/AboutOil.vue";
import AboutSkills from "@/components/AboutComponents/AboutSkills.vue";
</script>

<style>
hr {
  margin: 100px;
  border: none;
  border-top: 2px solid var(--vt-c-divider-dark-1);
}
</style>
