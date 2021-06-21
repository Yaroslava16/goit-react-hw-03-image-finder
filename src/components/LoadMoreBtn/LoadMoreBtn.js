import styles from "./LoadMoreBtn.module.css";

const LoadMore = ({ onChange }) => {
  return (
    <button className={styles.Button} onClick={onChange} type="button">
      load more
    </button>
  );
};
export default LoadMore;
