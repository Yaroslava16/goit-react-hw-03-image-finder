import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ webformatURL, id, tags, largeImageURL }) => {
    return (
      <li key={id} onClick={onClick} className={styles.Item}>
        <img
          data-largeurl={largeImageURL}
          src={webformatURL}
          alt={tags}
          className={styles.Image}
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
