import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/init"; // Assuming you have a Firebase initialization file

export const addFormData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "formData"), data);
    return docRef.id; // Return the document ID if needed
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; // Let the calling component handle the error
  }
};