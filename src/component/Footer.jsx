import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <Container fluid className="mt-5 text-light py-3">
            <Container>
                <Row className="mb-3">
                    <Col className="d-flex gap-3">
                        <Facebook className="fs-5" />
                        <Instagram className="fs-5" />
                        <Twitter className="fs-5" />
                        <Youtube className="fs-5" />
                    </Col>
                </Row>
                <Row className="row-cols-1  row-cols-sm-2 row-cols-md-4 text-start mb-3">
                    <Col>
                        <p>Audio and Subtitles</p>
                        <p>Media Center</p>
                        <p>Privacy</p>
                        <p>Contact us</p>
                    </Col>
                    <Col>
                        <p>Audio Description</p>
                        <p>Investor Relations</p>
                        <p>Legal Notices</p>
                    </Col>
                    <Col>
                        <p>Help Center</p>
                        <p>Jobs</p>
                        <p>Cookie Preferences</p>
                    </Col>
                    <Col>
                        <p>Gift Cards</p>
                        <p>Terms of Use</p>
                        <p>Corporate Information</p>
                    </Col>
                </Row>
            <Row className="mb-3">
                <Col xs="auto">
                    <Button variant="outline-secondary" size="sm" className="rounded-0">Service Code </Button>
                </Col>
            </Row>
            <Row>
                <Col xs="auto">
                    <p className="text-muted small mb-0">© 1997-2024 Netflix, Inc.</p>
                </Col>
            </Row>
        </Container>
        </Container>
    );
};

export default Footer;
