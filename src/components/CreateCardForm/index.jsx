import { useState } from "react";
import { POST } from "../../utils/http";
import Modal from "../Modal";
import styles from './styles.module.scss';

function CreateCardForm() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [genres, setGenres] = useState("");
  const [description, setDescription] = useState("");
  const [ShowModal, setShowModal] = useState("notvisible");
  const unStringifyGenres = (genres) => genres.split(",");

  const addNewMovie = (e) => {
    e.preventDefault();
    setShowModal("visible");

    POST({
      title,
      year,
      poster,
      genres: unStringifyGenres(genres),
      description,
    });
  };

  return (
    <div className={styles.CreateCardForm}>
      <h2 className={styles.CreateCardForm__h2}>Create a new movie card</h2>

      <form  onSubmit={addNewMovie} className={styles.CreateCardForm__form}>
        <label  className={styles.CreateCardForm__label} htmlFor="title">Title:</label>
        <input  className={styles.CreateCardForm__input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          required
        />

        <label className={styles.CreateCardForm__label}htmlFor="year">Year:</label>
        <input className={styles.CreateCardForm__input}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          id="year"
          name="year"
          required
        />

        <label className={styles.CreateCardForm__label} htmlFor="poster">Poster:</label>
        <input className={styles.CreateCardForm__input}
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          type="text"
          id="poster"
          name="poster"
          required
        />

        <label  className={styles.CreateCardForm__label} htmlFor="genres">Genres:</label>
        <input className={styles.CreateCardForm__input}
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          type="text"
          id="genres"
          name="genres"
          required
        />

        <label  className={styles.CreateCardForm__label} htmlFor="description">Description:</label>
        <input className={styles.CreateCardForm__input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
          required
        />

        <input className={styles.CreateCardForm__input} type="submit" value="Send it!" />

      </form>

      <Modal showCard={ShowModal}/>
    </div>
  );
}

export default CreateCardForm;