import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import ImageViewer from "./components/ImageViewer";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [bigImage, setBigImage] = useState("");

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  const viewIamge = (e) => {
    setBigImage(e.target);
  };
  const closeImage = () => {
    setBigImage("");
  };
  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} view={viewIamge} />
      {bigImage ? (
        <ImageViewer
          bigImage={bigImage}
          close={closeImage}
          imagesList={images}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
