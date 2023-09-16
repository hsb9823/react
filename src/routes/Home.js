import { useEffect, useState } from "react";
import Movie from "../components/Movie";
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
    <div>
      {loading ? <h1>Loading...</h1> : null}
      <div>
        <h2>Recommended movies with a rating of 9 or higher</h2>
        <hr />
      </div>
      <div>
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
