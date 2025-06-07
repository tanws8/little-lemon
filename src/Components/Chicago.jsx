import { Container, Row, Col } from "react-bootstrap";
import styles from "./modules/Hero.module.css";

export default function Chicago() {
  return (
    <section className="secondary-color-white py-5" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className={styles.heroTitle}>Little Lemon</h1>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="./images/restaurant.jpg"
              alt="Little Lemon Restaurant Outdoor Dinning Area"
              className={`${styles.heroImage} img-fluid`}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
