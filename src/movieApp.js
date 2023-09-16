import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function MovieApp() {
  return (
    <Router>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home />}
        ></Route>
        <Route
          basename={process.env.PUBLIC_URL}
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default MovieApp;
