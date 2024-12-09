<template>
  <div class="nav" ref="scrollDiv">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <!-- <RouterLink to="/projects">Projects</RouterLink> -->
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  setup() {
    const scrollDiv = ref(null);
    const scrollThreshold = 100;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        scrollDiv.value?.classList.add("hidden");
      } else {
        scrollDiv.value?.classList.remove("hidden");
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { scrollDiv };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem; /* Adds spacing between links */
}

.nav {
  position: fixed;
  z-index: 999;
  background-color: var(--vt-c-black-soft);
  padding: 10px;
  transition: opacity 0.3s ease; /* Smooth fade effect */
}
.hidden {
  opacity: 0;
  pointer-events: none; /* Prevent interaction when hidden */
}
</style>
