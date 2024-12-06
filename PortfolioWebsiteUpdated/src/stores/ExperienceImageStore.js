import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("images", {
  state: () => ({
    images: {
      chicago: "../assets/chicago.jpg",
      newYork: "",
      minnesota: "",
      indianapolis: "",
      colorado: "",
    },
    selectedImage: null,
  }),

  getters: {
    getImages: (state) => state.images,
    getSelectedImage: (state) => state.selectedImage,
  },
  actions: {
    /**
     * Set the selected image based on a key
     * @param {string} key - The key of the image to set as selected
     */
    setImage(key) {
      if (this.images[key]) {
        this.selectedImage = this.images[key];
      } else {
        console.warn(`Image for key '${key}' not found.`);
      }
    },
  },
});
