import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-4">
      <h2>Contact</h2>
      <p>Email: youremail@example.com</p>
      <p>
        GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a>
      </p>
      <p>
        LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
      </p>
    </Container>
  );
}

export default Contact;
