<template>
  <div>
    <HomeTop />
    <hr />
    <HomeAbout />
    <hr />
    <HomeSkill />
    <hr />
    <HomeMap />
    <hr />
    <HomeExperiences />
    <hr />
    <HomeFooter/>
  </div>
</template>

<script setup lang="ts">
import HomeAbout from "@/components/HomeAbout.vue";
import HomeSkill from "@/components/HomeSkill.vue";
import HomeTop from "@/components/HomeTop.vue";
import HomeMap from "@/components/HomeMap.vue";
import HomeExperiences from "@/components/HomeExperiences.vue";
import HomeFooter from "@/components/HomeFooter.vue";
</script>

<style scoped>
hr {
  margin: 100px;
  border: none;
  border-top: 2px solid var(--vt-c-divider-dark-1);
}
</style>
