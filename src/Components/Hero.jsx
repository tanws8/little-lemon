import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./modules/Hero.module.css"; // We'll add some custom styles too

export default function Hero() {
  return (
    <section
      id="Home"
      className={`${styles.heroSection} d-flex align-items-center`}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className={styles.heroTitle}>Welcome to Little Lemon</h1>
            <p className={styles.heroSubtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              error praesentium tenetur id laudantium dignissimos! Architecto,
              expedita totam? Distinctio corporis consequatur dicta laboriosam
              quod atque, deserunt nostrum maiores autem quisquam?
            </p>
            <Button variant="success" size="lg" href="#Reservations">
              Reserve a Table
            </Button>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="./images/food-at-little-lemon.jpg"
              alt="main dish"
              className={`${styles.heroImage} img-fluid`}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
