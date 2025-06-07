import { Container, Row, Col } from "react-bootstrap";
import styles from "./modules/Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="secondary-color-black">
      <Container>
        <Row className="py-4 text-white">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Little Lemon</h5>
            <p>
              Fresh, delicious food served daily. Experience the best of
              Mediterranean cuisine.
            </p>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="/" className={styles.link}>
                  Menu
                </a>
              </li>
              <li>
                <a href="/" className={styles.link}>
                  Reservations
                </a>
              </li>
              <li>
                <a href="/" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@littlelemon.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Main St, Chicago, IL</p>
          </Col>
        </Row>
        <Row className="text-center text-white pt-3">
          <Col>
            <small>
              © {new Date().getFullYear()} Little Lemon. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
