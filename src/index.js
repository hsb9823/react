import React from "react";
import ReactDOM from "react-dom";
import Movie from "./components/Movie";
import MovieApp from "./movieApp";

// import { BrowserRouter } from "react-router-dom";
// <BrowserRouter basename={process.env.PUBLIC_URL}>
//   <MovieApp />
// </BrowserRouter>;
ReactDOM.render(<MovieApp />, document.getElementById("root"));
