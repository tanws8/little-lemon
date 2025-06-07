import { Container, Row, Col } from "react-bootstrap";
import CustomersSayCard from "./CustomersSayCard";

const customers = [
  {
    fullName: "Lewis",
    image:
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 0, 0],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
  {
    fullName: "Alicia",
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 0],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
  {
    fullName: "Jenson",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 1],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
  {
    fullName: "Tiff",
    image:
      "https://images.unsplash.com/photo-1581714161666-dade083654ae?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 0.5, 0],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
];

export default function CustomersSay() {
  return (
    <section className="py-5 primary-color-green">
      <Container>
        <h2 className="text-center mb-4">Testimonials</h2>
        <Row>
          {customers.map((customer, index) => (
            <Col key={index} sm={12} md={6} lg={3} className="mb-4">
              <CustomersSayCard customer={customer} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
