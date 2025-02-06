<template>
  <div class="top"></div>
  <div class="two-column-grid">
    <div class="circle-image"></div>
    <p class="quote">
      "Strength doesn’t come from what you can do; it comes from overcoming the
      things you thought you couldn’t."<br />
      – Rikki Rogers
    </p>
  </div>
</template>

<style>
.circle-image {
  width: 400px; /* Set the size of the container */
  height: 400px; /* Equal width and height for a circle */
  background-image: url("../../assets/images/InterviewPoint1.jpg"); /* Your image */
  background-size: cover; /* Ensure the image fills the container */
  background-position: left; /* Center the image */
  border-radius: 50%; /* Create the circular shape */
}

.two-column-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal-width columns */
  gap: 16px; /* Optional: Space between columns */
  margin-top: 0px;
}

.quote {
  font-size: 40px;
}

.top {
  height: 120px;
}
</style>
