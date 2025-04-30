import { Container, ListGroup } from 'react-bootstrap';

function Education() {
  return (
    <Container className="my-4">
      <h2>Education</h2>
      <ListGroup>
        <ListGroup.Item>ABC University – BS in Information Technology (2022 - Present)</ListGroup.Item>
        <ListGroup.Item>XYZ High School – Senior High STEM (2019 - 2021)</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Education;
