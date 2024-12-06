<template>
  <h1 class="header">
    <span v-for="(letter, index) in title" :key="index" class="letter">{{
      letter
    }}</span>
  </h1>
</template>

<script>
export default {
  data() {
    return {
      title: "Brian", // Your header text
    };
  },
};
</script>

<style>
.header {
  display: flex;
  font-size: 50px;
}

.letter {
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;
}

.letter::after {
  content: "";
  position: absolute;
  bottom: 10px; /* Position of the underline */
  left: 0;
  width: 0%;
  height: 2px; /* Thickness of the underline */
  background-color: currentColor; /* Match text color */
  transition: width 0.3s ease-in-out;
  color: var(--vt-c-green-hover);
}

.header:hover .letter::after {
  width: 100%; /* Full underline */
}

.letter:hover::after {
  width: 100%; /* Individual letter underline on hover */
}

.header:hover {
  color: var(--vt-c-green-hover);
}
</style>
