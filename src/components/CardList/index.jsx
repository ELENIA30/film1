import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

import CardItem from "../CardItem";
import styles from "./style.module.scss";

function CardList({ searchInput }) {
  const [moviesData, setMoviesData] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    GET().then((data) => setMoviesData(data));
  }, [value]);

  return (
    <div className={styles.CardList}>
      <h1>Lista dei film</h1>
      <div className={styles.CardList__wrapper}>
        {moviesData &&
          moviesData
            .filter((movie) =>
              movie.title
                .toLowerCase()
                .trim()
                .includes(searchInput.toLowerCase().trim())
            )
            .map((movie) => (
              <CardItem
                cardData={movie}
                onForceRender={setValue}
                key={movie.id}
              />
            ))}
      </div>
    </div>
  );
}

export default CardList;