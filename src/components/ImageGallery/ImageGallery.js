import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ onImgClick, onClick, images }) => (
  <ul onClick={onImgClick} className={styles.ImageGallery}>
    <ImageGalleryItem onClick={onClick} images={images} />
  </ul>
);

export default ImageGallery;
