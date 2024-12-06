<template>
  <div>
    <HomeTop />
    <hr />
    <HomeAbout />
    <hr />
    <HomeSkill />
    <hr />
    <HomeMap2 />
    <hr />
    <HomeExperiences />
    <hr />
    <HomeFooter />
  </div>
</template>

<script setup lang="ts">
import HomeAbout from "@/components/HomeComponents/HomeAbout.vue";
import HomeSkill from "@/components/HomeComponents/HomeSkill.vue";
import HomeTop from "@/components/HomeComponents/HomeTop.vue";
import HomeMap from "@/components/HomeComponents/HomeMap.vue";
import HomeExperiences from "@/components/HomeComponents/HomeExperiences.vue";
import HomeFooter from "@/components/HomeComponents/HomeFooter.vue";
import HomeMap2 from "@/components/HomeComponents/HomeMap2.vue";
import HomeTitle from "@/components/HomeComponents/HomeTitle.vue";
</script>

<style scoped>
hr {
  margin: 100px;
  border: none;
  border-top: 2px solid var(--vt-c-divider-dark-1);
}
</style>
