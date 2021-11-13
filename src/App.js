import { useState } from "react";
import Form from "./components/Form";
import GalleryGrid from "./components/GalleryGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import useFirestore from "./hooks/useFirestore";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [docs] = useFirestore();
  console.log("Docs", docs);
  return (
    <div className="container mx-auto px-4 overflow-x-hidden">
      <Title />
      <Form />
      <GalleryGrid gallery={docs} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
