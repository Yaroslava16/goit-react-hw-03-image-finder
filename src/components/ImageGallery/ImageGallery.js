const ImageGallery = ({ onImgClick, children }) => (
  <ul onClick={onImgClick} className="ImageGallery">
    {children}
  </ul>
);

export default ImageGallery;
