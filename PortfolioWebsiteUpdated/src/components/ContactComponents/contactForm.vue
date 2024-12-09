<template>
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
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.name || !this.email) {
        alert("Name and Email are required!");
        return;
      }
      alert("Form submitted successfully!");
      // Add additional submission logic here, such as sending data to a server.
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
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
</style>
