import CardList from "../../components/CardList";
import styles from './style.module.scss';

function Home() {
  return (
    <div className={styles.Home}>
      <label className={styles.Home__label} htmlFor="search">Search by title or categories:</label>
      <input type="text" id="search" name="search" />

      <CardList />
    </div>
  );
}

export default Home;