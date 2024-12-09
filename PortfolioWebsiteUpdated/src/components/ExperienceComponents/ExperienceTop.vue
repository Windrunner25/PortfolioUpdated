<template>
  <img class="banner-image" src="../../assets/chicago.jpg" />
  <div class="map-container">
    <img src="../../assets/map.png" class="map-image" />
    <div
      v-for="(point, index) in points"
      :key="index"
      class="map-point-wrapper"
      :style="{ top: point.y + '%', left: point.x + '%' }"
      @click="handleClick"
      @mouseover="hoveredIndex = index"
      @mouseleave="hoveredIndex = null"
    >
      <div class="map-point"></div>
      <div class="popup">
        <h3>{{ point.location }}</h3>
        <p>{{ point.company }}</p>
        <p class="role-highlight">{{ point.role }}</p>
      </div>
    </div>
    <div>
      <h2 class="timeline-text" @click="changeState('newYork')">Baringa</h2>
      <h2 class="timeline-text" @click="changeState('indianapolis')">
        TiER1 Performance
      </h2>
      <h2 class="timeline-text" @click="changeState('colorado')">
        Chimerix, Inc
      </h2>
      <h2 class="timeline-text" @click="changeState('chicago')">
        Hawthorne Strategy Group
      </h2>
      <h2 class="timeline-text" @click="changeState('minnesota')">
        Camp Lincoln
      </h2>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
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

  data() {
    return {
      points: [
        {
          x: 17.5,
          y: 47.5,
          location: "Boulder, CO",
          company: "Chimerix, Inc.",
          role: "Data Management",
          image: "../../assets/colorado.jpg",
        },
        {
          x: 34.6,
          y: 42.6,
          location: "Indianapolis, IN",
          company: "TiER1 Performance",
          role: "Power BI / M365",
          image: "../../assets/indianapolis.jpg",
        },
        {
          x: 32.65,
          y: 35.04,
          location: "Chicago, IL",
          company: "Hawthorne Strategy Group",
          role: "Market Analyst",
          image: "../../assets/chicago.jpg",
        },
        {
          x: 45.5,
          y: 32.23,
          location: "New York, NY",
          company: "Baringa Partners",
          role: "Data & Analytics Consulting",
          image: "../../assets/newYork.jpg",
        },
        {
          x: 27.1,
          y: 19.96,
          location: "Nisswa, MN",
          company: "Camp Lincoln for Boys",
          role: "Camp Counselor",
          image: "../../assets/minnesota.jpg",
        },
      ],
      hoveredIndex: "null",
    };
  },
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal-width columns */
  gap: 16px; /* Optional: Space between columns */
  margin-top: 50px;
  /* outline: 2px solid white; */
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

.role-highlight {
  color: var(--vt-c-green-hover);
}

.timeline {
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeline-text {
  font-size: 30px;
  transition: transform 0.3s ease, color 0.3s ease;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Aligns text to the right */
  gap: 10px; /* Even spacing between lines */
  margin: 20px;
}

.timeline-text:hover {
  /* transform-origin: right; */
  transform: scale(1.3); /* Makes the text grow 30% */
  color: var(--vt-c-green-hover); /* Optional: changes the color on hover */
  cursor: pointer;
}

.banner-image {
  margin-top: 100px;
  width: 100%;
  /* height: 100px; */
}
</style>
