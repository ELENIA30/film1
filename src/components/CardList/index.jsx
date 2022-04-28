import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import CardItem from "../CardItem";
import styles from './style.module.scss';

function CardList() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    GET().then((data) => setMoviesData(data));
  }, []);

  return (
    <div className={styles.CardList}>
      <h1 className={styles.CardList__h1}>Lista dei film</h1>
      <div className={styles.CardList__wrapper}>
        {moviesData &&
          moviesData.map((movie) => (
            <CardItem cardData={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default CardList;