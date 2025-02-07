import { Container } from "react-bootstrap";
import Movie from "./Movie";
const SectionFilm = (props) =>{

    return (
      <>
        <Container fluid className="my-2">
          <h3 className="text-light fs-5 fw-semibold">{props.title}</h3>
          <Container fluid className="my-2">
            
              <Movie filmTitle={props.filmTitle} />
           
          </Container>
        </Container>
      </>
    );

}

export default SectionFilm; 