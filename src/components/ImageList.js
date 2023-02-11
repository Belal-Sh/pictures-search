import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images, view }) {
  const renderImages = images.map((image, index) => {
    return <ImageShow key={image.id} image={image} index={index} view={view}/>;
  });
  return <div className="image-list" >{renderImages}</div>;
}

export default ImageList;
