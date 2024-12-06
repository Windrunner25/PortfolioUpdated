<template>
    <div class="card" @click="handleClick()">
      <div class="card-content">
        <span class="material-symbols-outlined">{{ Icon }}</span>
        <h3 class="card-title">{{ Adjective }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "SkillCard",
    props: {
      Adjective: {
        type: String,
      },
      Icon: {
        type: String,
      },
    },
    methods: {
      handleClick() {
        this.$router.push({ name: "about" });
      },
    },
  });
  </script>
  
  <style scoped>
  /* Individual card styling */
  .card {
    width: 300px; /* Fixed width */
    background-color: var(--vt-c-divider-dark-1);
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    overflow: hidden; /* Ensures content stays within card */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Hover effects */
    cursor: pointer;
  }
  
  .card:hover {
    transform: translateY(-5px); /* Slight hover lift */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
    background-color: var(--vt-c-green-hover);
  }
  
  /* Card image styling */
  .material-symbols-outlined {
    color: white;
    font-size: 40px;
  }
  
  /* Card content styling */
  .card-content {
    padding: 1rem;
    text-align: center; /* Center-align text */
  }
  
  /* Title styling */
  .card-title {
    font-size: 15px;
    font-weight: bold;
    color: white;
  }
  
  /* Text styling */
  .card-text {
    font-size: 10px;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  
  .card-button:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
  </style>
  