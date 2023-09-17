import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const onChange = (event) => {};
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
    // console.log(movies.genres);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        {loading ? (
          <h1 className={styles.loading}>Loading...</h1>
        ) : (
          <h2 className={styles.page_title}>
            Recommended movies with a rating of 9 or higher
          </h2>
        )}
      </div>

      <div className={styles.movies}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            summary={movie.summary}
            genres={movie.genres}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
