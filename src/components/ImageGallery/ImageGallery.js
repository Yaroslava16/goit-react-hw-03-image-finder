import styles from "./ImageGallery.module.css";

const ImageGallery = ({ onImgClick, children }) => (
  <ul onClick={onImgClick} className={styles.ImageGallery}>
    {children}
  </ul>
);

export default ImageGallery;
