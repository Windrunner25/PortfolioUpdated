<template>
  <div class="map-container">
    <img src="../assets/map.png" class="map-image" />
    <div
      v-for="(point, index) in points"
      :key="index"
      class="map-point"
      :style="{
        top: point.y + '%',
        left: point.x + '%',
      }"
      @mouseenter="showPopup(point)"
      @mouseleave="hidePopup"
      @click="handleClick()"
    ></div>
    <div
      v-if="popupVisible"
      class="popup"
      :style="{ top: popupVisible.y + '%', left: popupVisible.x + '%' }"
    >
      <h3>{{ popupVisible.location }}</h3>
      <p>{{ popupVisible.company }}</p>
      <p>{{ popupVisible.role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          x: 35,
          y: 45,
          location: "Boulder, CO",
          company: "Chimerix, Inc.",
          role: "Data Management",
        },
        {
          x: 70.16,
          y: 43.29,
          location: "Indianapolis, IN",
          company: "TiER1 Performance",
          role: "Power BI / M365",
        },
        {
          x: 66.72,
          y: 36.08,
          location: "Chicago, IL",
          company: "Hawthorne Strategy Group",
          role: "Market Analyst",
        },
        {
          x: 92.13,
          y: 32.47,
          location: "New York, NY",
          company: "Baringa Partners",
          role: "Data & Analytics Consulting",
        },
        {
          x: 54.92,
          y: 21.91,
          location: "Nisswa, MN",
          company: "Baringa Partners",
          role: "Data & Analytics Consulting",
        },
      ],
      popupVisible: null,
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ name: "experience" });
    },
    showPopup(point) {
      this.popupVisible = point;
    },
    hidePopup() {
      this.popupVisible = null;
    },
  },
};
</script>

<style>
.map-container {
  position: relative;
  width: 100%;
  max-width: 800px; /* Set a max width for your map */
  margin: 0 auto;
  margin-top: 100px;
}

.map-image {
  display: block;
  width: 100%;
  height: auto;
}

.map-point {
  position: absolute;
  transform: translate(-50%, -50%);
  background: white; /* Adjust styling as needed */
  color: white;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  text-align: center;
}

.map-point::after {
  content: '';
  position: absolute;
  top: -15px; /* Expand the hover area above the point */
  left: -15px; /* Expand the hover area to the left of the point */
  width: 40px; /* Width of the hover area */
  height: 40px; /* Height of the hover area */
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid transparent; /* Optional: Border for better visibility */
  z-index: 0; /* Ensure the hover area is below the point */
}

.popup {
  position: absolute;
  top: 100px;
  left: 100px;
  padding: 20px;
  background-color: gray; /* White background for the card */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for the card */
  z-index: 1000;
  width: 200px; /* Adjust the width as needed */
  text-align: center; /* Center the text inside the popup */
}

.popup h3, p {
    color: white;
}
</style>
