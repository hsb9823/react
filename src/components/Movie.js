import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ title, year, rating, coverImg, summary, genres, id }) {
  return (
    <div>
      <h3>
        <Link to={`/movie/${id}`}>{title},</Link> ({year}), ⭐{rating}
      </h3>
      <img src={coverImg} alt={title} />
      <p>
        <strong>Summary : </strong> {summary}
      </p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
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
