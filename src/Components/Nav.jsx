import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";

const links = [
  { id: 1, link: "Home" },
  { id: 2, link: "About" },
  { id: 3, link: "Menu" },
  { id: 4, link: "Reservations" },
  { id: 5, link: "Order Online" },
  { id: 6, link: "Login" },
];

export default function Navigation() {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShow(scrollPos > currentScroll || currentScroll < 50);
      setScrollPos(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="light"
      variant="light"
      className={`shadow-sm transition-navbar ${
        show ? "nav-show" : "nav-hide"
      }`}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./images/logo.png"
            className="logo"
            alt="Little Lemon Logo"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map(({ id, link }) => (
              <Nav.Link key={id} as="div">
                <ScrollLink
                  to={link}
                  smooth
                  duration={550}
                  offset={-70} // adjust if sticky navbar hides content
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  {link}
                </ScrollLink>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
