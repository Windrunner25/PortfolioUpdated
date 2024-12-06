<template>
  <div>
    <!-- <button @click="changeImage('chicago')">Show Chicago</button>
    <button @click="changeImage('newYork')">Show New York</button>
    <img v-if="selectedImage" :src="selectedImage" alt="Selected Image" /> -->
    <!-- <img src="../../assets/chicago.jpg" />
    <img src="../../assets/chicago.jpg" /> -->
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
  </div>
</template>

<script>
import { useImageStore } from "@/stores/ExperienceImageStore";

export default experienceImage({
  setup() {
    const imageStore = useImageStore();

    const changeImage = (key) => {
      imageStore.setImage(key);
    };

    return {
      selectedImage: imageStore.getSelectedImage,
      changeImage,
    };
  },
});
</script>
