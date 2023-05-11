import "./App.css";
import MovieList from "./components/MovieList";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App bg-dark text-info">
      <h1 className="display-2 fw-bold">James Bond Movie Reviews</h1>
      <MovieList />
    </div>
  );
}

export default App;
