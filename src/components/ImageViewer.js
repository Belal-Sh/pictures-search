import { useState } from "react";

function ImageViewer({ bigImage, close, imagesList }) {
  const [image, setImage] = useState(bigImage.src);
  const res = [];
  imagesList.map((item) => res.push(item.urls.small));
  const imageIndex = res.findIndex((item) => item === image);
  const resultsLength = res.length;
  const nextImage = () => {
    setImage(res[imageIndex + 1]);
  };
  const prevImage = () => {
    setImage(res[imageIndex > 0 ? imageIndex - 1 : imageIndex + resultsLength]);
  };
  return (
    <div className="overlay">
      <img src={image} alt="selected" />
      <span className="close-btn" onClick={close}>
        X
      </span>
      <span className="next-btn" onClick={nextImage}>
        Next
      </span>
      <span className="prev-btn" onClick={prevImage}>
        Prev
      </span>
    </div>
  );
}

export default ImageViewer;
