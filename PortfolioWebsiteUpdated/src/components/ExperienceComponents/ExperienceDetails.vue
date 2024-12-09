<template>
  <div class="details">
    <h1>{{ textStore.currentState.location }}</h1>
    <p>{{ textStore.currentState.text }}</p>
  </div>
</template>
<script>
import { useTextStore } from "@/stores/ExperienceTextStore";

export default {
  setup() {
    const textStore = useTextStore();

    const changeState = (key) => {
      textStore.changeState(key);
    };

    return {
      textStore,
      changeState,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 1rem; /* Base font size */
  line-height: 1.6; /* Improves readability */
  color: white; /* Neutral text color */
  margin-bottom: 1rem; /* Spacing below the paragraph */
  text-align: justify; /* Justifies text for a clean block look */
  letter-spacing: 0.5px; /* Slightly improves legibility */
  word-wrap: break-word; /* Prevents overflow on long words */
  transition: color 0.3s ease; /* Adds smooth transition effects */

  /* Ensure proper responsiveness */
  max-width: 600px; /* Optional: limits width for better readability */
  width: 100%; /* Ensures full width on smaller screens */
  /* outline: 1px solid white; */
}
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
</style>
