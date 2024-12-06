<template>
  <h1>Internships</h1>
  <div class="map-container">
    <img src="../../assets/map.png" class="map-image" />
    <div
      v-for="(point, index) in points"
      :key="index"
      class="map-point-wrapper"
      :style="{ top: point.y + '%', left: point.x + '%' }"
      @click="handleClick()"
    >
      <div class="map-point"></div>
      <div class="popup">
        <h3>{{ point.location }}</h3>
        <p>{{ point.company }}</p>
        <p class="role-highlight">{{ point.role }}</p>
      </div>
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
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ name: "experience" });
    },
  },
};
</script>

<style>
.map-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
}

.map-image {
  display: block;
  width: 100%;
  height: auto;
}

.map-point-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
}

.map-point {
  background: #3498db;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  cursor: pointer;
}

.popup {
  position: absolute;
  top: 20px; /* Adjust position relative to the point */
  left: 50%;
  transform: translate(-50%, 10px); /* Start slightly lower for animation */
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0; /* Initially hidden */
  white-space: nowrap; /* Prevent text from wrapping */
  z-index: 1000;
  pointer-events: none; /* Prevent hover issues */
}

.map-point-wrapper:hover .popup {
  opacity: 1; /* Fully visible on hover */
  transform: translate(-50%, 0); /* Slide to its original position */
  pointer-events: auto; /* Allow interaction if needed */
}

.role-highlight{
    color: var(--vt-c-green-hover);
}
</style>
