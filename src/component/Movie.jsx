import { Component } from "react"
import { Col , Row, Spinner, Alert} from "react-bootstrap"
class Movie extends Component {
  state = {
    movies: [],
    hasError: false,
    isLoading: true,
    errorMessage: "",
  };

  fetchMovies = async () => {
    this.setState({ isLoading: true }); 

    try {
      console.log("FilmTitle ricevuto nei props:", this.props.filmTitle);
      const response = await fetch(`https://www.omdbapi.com/?apikey=8565bfb6&s=${this.props.filmTitle}`);
      if (response.ok) {
        const data = await response.json();

        console.log("API :", data);

        const movies = (data.Search || []).slice(0, 6);
        this.setState({ movies, hasError: false, errorMessage: "" }); 

        this.setState({ movies });
      } else {
        if (response.status === 404) {
          throw new Error("errore numero 404");
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      }
    } catch (error) {
      console.error("Errore nel caricamento della fetch", error);
      this.setState({ hasError: true, errorMessage: error.message }); 
    } finally {
      this.setState({ isLoading: false });
    }};
  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="d-flex justify-content-center my-3">
            <Spinner animation="border" role="status" variant="info">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {this.state.hasError && (
          <Alert variant="danger" className="text-center">
            {this.state.errorMessage || "Errore nel caricamento dei film. Riprova più tardi."}
          </Alert>
        )}
        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 justify-content-center">
          {this.state.movies.map((movie) => (
            <Col key={movie.imdbID} className="mb-3 d-flex justify-content-center">
              <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Movie;