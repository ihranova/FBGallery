import React, { useState, useEffect } from "react";
import { app } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";

const useFirestore = () => {
  const db = getFirestore();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "images"), orderBy("createAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const images = [];
      querySnapshot.forEach((doc) => {
        images.push({ ...doc.data(), id: doc.id });
      });
      setDocs(images);
    });
    return () => unsubscribe();
  }, []);
  return [docs];
};
export default useFirestore;
