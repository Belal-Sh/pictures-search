function ImageShow({ image, index, view }) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        id={image.id}
        data-id={index}
        onClick={view}
      />
    </div>
  );
}

export default ImageShow;
