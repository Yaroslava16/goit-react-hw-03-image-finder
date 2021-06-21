import styles from "./ImageGalleryItem.module.css";

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

export default ImageGalleryItem;
