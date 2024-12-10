<template>
  <button @click="createUser">Press Me</button>
</template>

<script>
import db from "../../firebase/init.js";
import { collection, addDoc } from "firebase/firestore";

export default {
  methods: {
    async createUser() {
      const colRef = collection(db, "users");
      const dataObj = {
        firstName: "John",
        lastName: "Smith",
        dob: "1999",
      };

      const docRef = await addDoc(colRef, dataObj);

      console.log("Document was created with ID:", docRef.id);
    },
  },
};
</script>

<style>
button {
  background-color: #4caf50; /* Primary green color */
  color: white; /* Text color */
  padding: 12px 24px; /* Padding around text */
  font-size: 16px; /* Font size */
  font-weight: bold; /* Bold text */
  border: none; /* Remove border */
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
}

button:hover {
  background-color: #45a049; /* Slightly darker green on hover */
  transform: translateY(-2px); /* Slight lift effect */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
}

button:active {
  background-color: #3e8e41; /* Darker green for active state */
  transform: translateY(1px); /* Slight press-down effect */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Reduced shadow for active state */
}

button:disabled {
  background-color: #ccc; /* Gray color for disabled state */
  color: #666; /* Dimmed text color */
  cursor: not-allowed; /* Prohibited cursor */
  box-shadow: none; /* Remove shadow for disabled state */
}
</style>
