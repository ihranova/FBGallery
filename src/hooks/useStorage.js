import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  doc,
  setDoc,
  getFirestore,
  serverTimestamp,
  collection,
} from "firebase/firestore";

import { app } from "../firebase/config";
const types = ["image/png", "image/jpeg"];

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [link, setLink] = useState(null);
  const storage = getStorage(app);
  const db = getFirestore();
  const checkImageType = (img) => {
    if (img && types.includes(img.type)) {
      setFile(img);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  const addToDocs = async (link) => {
    await setDoc(doc(collection(db, "images")), {
      link,
      createAt: serverTimestamp(),
    });
  };

  useEffect(() => {
    if (!file) {
      return null;
    }
    const storageRef = ref(storage, "images/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            setError("User doesnt have permission to access the object");
            break;
          case "storage/canceled":
            // User canceled the upload
            setError("User canceled the upload");
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            setError("Unknown error occurred");
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          addToDocs(downloadURL);
          setLink(downloadURL);
          setFile(null);
        });
      }
    );
  }, [file]);

  return [progress, file, setFile, error, link, checkImageType];
};
export default useStorage;
