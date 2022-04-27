import { useState } from "react";
import { POST } from "../../utils/http";
import "./style.css";
import Modal from "../Modal";

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
    <div className="CreateCardForm">
      <h2>Create a new movie card</h2>

      <form onSubmit={addNewMovie} className="CreateCardForm__form">
        <label htmlFor="title">Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          required
        />

        <label htmlFor="year">Year:</label>
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          id="year"
          name="year"
          required
        />

        <label htmlFor="poster">Poster:</label>
        <input
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          type="text"
          id="poster"
          name="poster"
          required
        />

        <label htmlFor="genres">Genres:</label>
        <input
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          type="text"
          id="genres"
          name="genres"
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
          required
        />

        <input type="submit" value="Send it!" />

      </form>

      <Modal showCard={ShowModal}/>
    </div>
  );
}

export default CreateCardForm;