import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ title, year, rating, coverImg, summary, genres, id }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie_img} src={coverImg} alt={title} />
      <div>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>{title}</Link> ⭐{rating}
        </h2>
        <h3 className={styles.movie_year}>{year}</h3>
        <p>
          Summary :{" "}
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul className={styles.movie_genres}>
          <li>Genres :</li>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
