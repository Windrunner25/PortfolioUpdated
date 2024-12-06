<template>
  <h1>Skills</h1>
  <div class="card-container">
    <SkillCard -adjective="Fixer" -icon="check_circle" />
    <SkillCard -adjective="Leader" -icon="group" />
    <SkillCard -adjective="Communicator" -icon="record_voice_over" />
  </div>
  <div class="card-container">
    <SkillCard -adjective="Collaborator" -icon="diversity_3" />
    <SkillCard -adjective="Organizer" -icon="list_alt" />
    <SkillCard -adjective="Harmonizer" -icon="network_node" />
  </div>
  <div class="card-container">
    <SkillCard -adjective="Mentor" -icon="supervisor_account" />
    <SkillCard -adjective="Adventurer" -icon="landscape" />
    <SkillCard -adjective="Athlete" -icon="sports_tennis" />
  </div>
</template>

<script setup lang="ts">
import SkillCard from "../SkillCard.vue";
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
