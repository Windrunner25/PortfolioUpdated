<template>
    <h1>Oil to my Gears</h1>
    <div class="card-container">
      <OilCard -adjective="Meditation" -icon="self_improvement" />
      <OilCard -adjective="Journaling" -icon="menu_book" />
      <OilCard -adjective="Running" -icon="sprint" />
    </div>
    <div class="card-container">
      <OilCard -adjective="Reading" -icon="book_2" />
      <OilCard -adjective="Music" -icon="headphones" />
      <OilCard -adjective="Sleep" -icon="bed" />
    </div>

  </template>
  
  <script setup lang="ts">
  import SkillCard from "../SkillCard.vue";
import OilCard from "./OilCard.vue";
  </script>
  
  <style>
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem; /* Space between cards if multiple */
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
    padding: 1rem;
  }
  </style>
  