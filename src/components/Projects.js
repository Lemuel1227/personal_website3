import { Container, Card, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <Container className="my-4">
      <h2>Projects</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>Description and technologies used.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>Description and technologies used.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
