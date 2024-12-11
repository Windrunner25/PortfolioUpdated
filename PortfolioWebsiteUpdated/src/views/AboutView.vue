<template>
  <div>
    <AboutImage />
    <hr />
    <AboutSkills />
    <hr />
    <AboutOil />
    <hr />
    <HomeFooter />
  </div>
</template>

<script setup lang="ts">
import AboutImage from "@/components/AboutComponents/AboutImage.vue";
import AboutOil from "@/components/AboutComponents/AboutOil.vue";
import AboutSkills from "@/components/AboutComponents/AboutSkills.vue";
import HomeFooter from "@/components/HomeComponents/HomeFooter.vue";
</script>

<style>
hr {
  margin: 100px;
  border: none;
  border-top: 2px solid var(--vt-c-divider-dark-1);
}
</style>
