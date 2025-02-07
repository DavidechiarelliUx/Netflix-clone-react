import { Container, Dropdown, Col, Row } from "react-bootstrap";
import { Grid, Grid3x3Gap } from "react-bootstrap-icons";


const TvShows = () => {
  return (
    <Container fluid className="text-light">
      <Row className="d-flex align-items-center justify-content-between">
        <Col className="d-flex align-items-center">
          <h2 className="me-4">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle variant="transparent text-light" className="border-light rounded-0" id="dropdown-basic">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Trhiller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex gap-3 mx-5 justify-content-end">
          <Grid className="fs-5" />
          <Grid3x3Gap className="fs-5" />
        </Col>
      </Row>
    </Container>
  );
};

export default TvShows;
