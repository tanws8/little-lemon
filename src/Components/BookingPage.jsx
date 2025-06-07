/*
    Form
    - Date
    - Time
    - Number of guests
    - Occasion (Birthday, Anniversity) ***
    - Submit reservation button (to submit the form)
*/

import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [errors, setErrors] = useState({});

  const [formErrors, setFormErrors] = useState({
    name: "",
    contact: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  });

  const [reservation, setReservation] = useState({
    guests: "",
    date: "",
    time: "",
    name: "",
    contact: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["guests", "occasion", "date", "time"].includes(name)) {
      setReservation((prev) => ({ ...prev, [name]: value }));
    }

    if (name === "name") {
      const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData((prev) => ({ ...prev, name: onlyLetters }));

      if (!/^[a-zA-Z\s]*$/.test(value)) {
        setFormErrors((prev) => ({
          ...prev,
          name: "Name must contain only letters.",
        }));
      } else {
        setFormErrors((prev) => ({ ...prev, name: "" }));
      }
    } else if (name === "contact") {
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, contact: onlyNumbers }));

      if (!/^[0-9]*$/.test(value)) {
        setFormErrors((prev) => ({
          ...prev,
          contact: "Contact must contain only numbers.",
        }));
      } else {
        setFormErrors((prev) => ({ ...prev, contact: "" }));
      }
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!reservation.guests)
      newErrors.guests = "Please select number of guests.";
    if (!reservation.occasion) newErrors.occasion = "Please select an Occasion";
    if (!reservation.date) newErrors.date = "Please select a date.";
    if (!reservation.time) newErrors.time = "Please select a time.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2)
      newErrors.name = "Please enter a valid name.";
    if (!formData.contact || formData.contact.length < 8)
      newErrors.contact = "Please enter a valid contact number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;

    setStep((prev) => prev + 1);
  };

  const reset = () => {
    setReservation({
      guests: "",
      date: "",
      time: "",
      name: "",
      contact: "",
      instructions: "",
    });
  };

  return (
    <section className="py-5">
      <Container>
        {step === 1 && (
          <Form className="py-5">
            <h4>RESERVE A TABLE</h4>
            <p className="py-2">
              Reservations are only available form 11am to 8:30pm, and to the
              discretion of the restaurant's availability. Table allcations are
              on the first-come first-serve basis.
            </p>
            <Form.Group className="py-3" controlId="guests">
              <Form.Label>No. of Guests</Form.Label>
              <Form.Control
                as="select"
                name="guests"
                onChange={handleChange}
                isInvalid={!!errors.guests}
              >
                <option value="">Select</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.guests}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="py-3" controlId="occasion">
              <Form.Label>Occasion</Form.Label>
              <Form.Control
                as="select"
                name="occasion"
                onChange={handleChange}
                isInvalid={!!errors.occasion}
              >
                <option value="">Select</option>
                {[
                  "Birthday",
                  "Anniversary",
                  "Graduation",
                  "Baby Shower",
                  "Party",
                ].map((occasion, i) => (
                  <option key={i + 1} value={occasion}>
                    {occasion}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.occasion}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="py-4" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={reservation.date}
                onChange={handleChange}
                isInvalid={!!errors.date}
                min={new Date().toISOString().split("T")[0]}
              />
              <Form.Control.Feedback type="invalid">
                {errors.date}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="py-4" controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={reservation.time}
                onChange={handleChange}
                isInvalid={!!errors.time}
                min="11:00"
                max="20:30"
              />
            </Form.Group>

            <Button
              className="mt-3 primary-color-yellow"
              style={{ color: "black" }}
              onClick={nextStep}
            >
              Checkout
            </Button>
          </Form>
        )}

        {step === 2 && (
          <Form className="py-5">
            <h4>RESERVATION DETAILS</h4>
            <div className="py-2">
              <p>
                <strong>Date:</strong> {reservation.date}
              </p>
              <p>
                <strong>Time:</strong> {reservation.time}
              </p>
              <p>
                <strong>No. of Guests:</strong> {reservation.guests}
              </p>
            </div>
            <div className="py-3">
              <h5>SPECIAL INSTRUCTIONS</h5>
              <p>
                <b>One step closer to complete your reservation!</b> Please fill
                in your request/instructions (if any), your name and contact
                number.
              </p>
            </div>

            <Form.Group controlId="instructions">
              <Form.Label>Other Requests (optional)</Form.Label>
              <Form.Control
                as="textarea"
                name="instructions"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!formErrors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="contact" className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                isInvalid={!!formErrors.contact}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.contact}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="mt-3 primary-color-yellow"
              style={{ color: "black" }}
              onClick={nextStep}
            >
              Checkout
            </Button>
          </Form>
        )}

        {step === 3 && (
          <div className="py-4 text-center mt-5">
            <img
              src="./images/little-lemon-logo-small.png"
              alt="Check"
              width="200"
            />
            <h4 className="mt-3">Thank you. Your booking is confirmed.</h4>
            <p>
              Please feel free to contact us at <strong>+65 95895689</strong> if
              you wish to change/cancel.
            </p>
            <Button variant="warning" className="me-2">
              Add to calendar
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                reset(); // Your custom function to reset the form
                navigate("/"); // Navigation action
              }}
            >
              Home
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
