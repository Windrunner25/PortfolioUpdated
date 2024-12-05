<script setup lang="ts">
import Socials from "./Socials.vue";
</script>

<template>
  <div class="two-column-grid">
    <div style="display: flex; justify-content: center; align-items: center">
      <div>
        <h1 style="font-size: 50px">Brian Wolf</h1>
        <!-- <h5>Communicator * Problem-Solver * Leader</h5> -->
      </div>
    </div>
    <div style="display: grid; grid-template-columns: 5fr 1fr">
      <div style="display: flex; justify-content: center; align-items: center">
        <img
          src="../assets/side-profile copy.png"
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
  margin-top: 50px;
}
</style>
