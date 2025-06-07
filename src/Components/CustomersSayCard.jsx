import { Card } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function CustomersSayCard({ customer }) {
  const renderStars = (rating) =>
    rating.map((val, idx) =>
      val === 1 ? (
        <FaStar key={idx} />
      ) : val === 0.5 ? (
        <FaStarHalfAlt key={idx} />
      ) : (
        <FaRegStar key={idx} />
      )
    );

  return (
    <Card className="h-100 text-center">
      <Card.Img
        variant="top"
        src={customer.image}
        alt={customer.fullName}
        style={{
          width: "8rem",
          height: "8rem",
          objectFit: "cover",
          borderRadius: "50%",
          margin: "1rem auto 0.5rem",
        }}
      />
      <Card.Body>
        <Card.Title>{customer.fullName}</Card.Title>
        <div className="d-flex justify-content-center mb-2">
          {renderStars(customer.rating)}
        </div>
        <Card.Text>
          <blockquote className="blockquote mb-0">
            <p>{customer.says}</p>
          </blockquote>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
