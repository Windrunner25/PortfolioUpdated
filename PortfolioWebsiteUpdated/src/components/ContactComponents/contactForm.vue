<template>
  <h1 class="header">
    <span v-for="(letter, index) in title" :key="index" class="letter">{{
      letter
    }}</span>
  </h1>
  <p>
    Please reach out if you'd like to schedule a coffee chat or just connect!
  </p>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label for="name">Name<span class="required">*</span></label>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email<span class="required">*</span></label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="Enter your email"
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="message"
          placeholder="Enter your message (optional)"
        ></textarea>
      </div>
      <button type="submit" class="submit-button" :disabled="isLoading">
        {{ isLoading ? "Submitting..." : "Submit" }}
      </button>
      <div v-if="isLoading" class="loading-spinner">Submitting data...</div>
    </form>
  </div>
</template>

<script>
import db from "../../firebase/init.js";
import { collection, addDoc } from "firebase/firestore";
import { addFormData } from "../../firebase/firebaseService";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      title: "Contact!",
      isLoading: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.name || !this.email) {
        alert("Please fill out both name and email.");
        return;
      }
      this.isLoading = true;
      const colRef = collection(db, "users");
      const dataObj = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      try {
        const docId = await addFormData(dataObj); // Call the service
        this.successMessage = `Form submitted successfully! Document ID: ${docId}`;
        this.clearForm();
      } catch (error) {
        alert("An error occurred while submitting the form. Please try again.");
      } finally {
        this.isLoading = false;
      }
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
  background-color: var(--vt-c-black-soft);
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--vt-c-black-soft);
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.required {
  color: red;
  margin-left: 3px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
  color: white;
}

input:focus,
textarea:focus {
  border-color: var(--vt-c-green-hover);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  padding: 10px 20px;
  background-color: var(--vt-c-green-hover);
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: var(--vt-c-green-hover-hover);
}

button:active {
  background-color: #3e8e41; /* Darker green for active state */
  transform: translateY(1px); /* Slight press-down effect */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Reduced shadow for active state */
}

.header {
  display: flex;
  font-size: 50px;
  height: 130px;
  align-items: flex-end;
  justify-content: center;
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

p {
  display: flex;
  justify-content: center;
}

.loading-spinner {
  margin-top: 10px;
  color: var(--vt-c-green-hover);
  font-size: 14px;
}
.submit-button:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
