import styles from './LoadMoreBtn.module.css';
import PropTypes from 'prop-types';

const LoadMore = ({ onChange }) => {
  return (
    <button className={styles.Button} onClick={onChange} type="button">
      load more
    </button>
  );
};

LoadMore.propTypes = { onChange: PropTypes.func.isRequired };

export default LoadMore;
