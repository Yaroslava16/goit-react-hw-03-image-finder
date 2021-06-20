const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ webformatURL, id, tags, largeImgURL }) => {
    return (
      <li key={id} onClick={onClick} className="ImageGalleryItem">
        <img
          largeImgURL={largeImgURL}
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
