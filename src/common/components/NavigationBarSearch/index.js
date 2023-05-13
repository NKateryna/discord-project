import styles from './index.module.css';

function NavigationBarSearch() {
  const onclickSearch = () => {};

  return (
    <div className={styles.searchBox}>
      <div className={styles.search} onClick={onclickSearch}>
        Find or start the conversation
      </div>
    </div>
  );
}

export default NavigationBarSearch;
