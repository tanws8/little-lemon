import Card from "./Card";
import { Button } from "react-bootstrap";

export default function Specials() {
  const specialMeals = [
    {
      id: 1,
      name: "Greek Salad",
      image: "./images/greek-salad.jpg",
      price: "$10.00",
      description: `The famous greek salad of crispy lettuce, peppers, 
                olives and our Chicago style feta cheese, garnished 
                with crunchy garlic and rosemary croutons.`,
    },
    {
      id: 2,
      name: "Bruschetta",
      image: "./images/bruschetta.jpg",
      price: "$6.79",
      description: `Our Bruschetta is made from grilled bread that has been smeared with 
                garlic and seasoned with salt and olive oil`,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      image: "./images/lemonDessert.jpg",
      price: "$8.50",
      description: `This comes straight from grandma's recipe book, every last ingredient 
                has been sourced and is an authentic as can be imagined.`,
    },
  ];

  return (
    <section className="py-5 secondary-color-white">
      <div className="container d-flex justify-content-between">
        <h2>Specials</h2>
        <Button
          href="#Reservations"
          className={`primary-color-green specials-section-btn`}
        >
          Online Menu
        </Button>
      </div>
      <div>
        <Card specialMeals={specialMeals} />
      </div>
    </section>
  );
}
