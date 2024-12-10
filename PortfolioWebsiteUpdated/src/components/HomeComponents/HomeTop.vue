<script setup lang="ts">
import Socials from "../Socials.vue";
import HomeTitle from "./HomeTitle.vue";
</script>

<template>
  <div class="two-column-grid">
    <div style="display: flex; justify-content: center; align-items: center">
      <div style="display: flex; align-items: center; justify-content: center">
        <h1 style="font-size: 50px">Hi, I'm&nbsp;</h1>
        <HomeTitle />
      </div>
    </div>
    <div style="display: grid; grid-template-columns: 5fr 1fr">
      <div style="display: flex; justify-content: center; align-items: center">
        <img
          src="../../assets/images/side-profile copy.png"
          alt="image of Brian Wolf"
          height="400x"
        />
      </div>
      <Socials />
    </div>
  </div>
</template>

<style>
.two-column-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal-width columns */
  gap: 16px; /* Optional: Space between columns */
}
</style>
