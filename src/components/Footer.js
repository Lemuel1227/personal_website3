import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} My Portfolio</p>
      </Container>
    </footer>
  );
}

export default Footer;
