import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ onImgClick, onClick, images }) => (
  <ul onClick={onImgClick} className={styles.ImageGallery}>
    <ImageGalleryItem onClick={onClick} images={images} />
  </ul>
);

ImageGallery.propTypes = {
  onImgClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
