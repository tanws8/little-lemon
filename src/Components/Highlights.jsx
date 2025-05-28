import Card from "./Card";

export default function Highlights() {
  const specialMeals = [
    {
      name: "Greek Salad",
      image: "greekSaladImage",
      price: "$10.00",
      description: `The famous greek salad of crispy lettuce, peppers, 
                olives and our Chicago style feta cheese, garnished 
                with crunchy garlic and rosemary croutons.`,
    },
    {
      name: "Bruschetta",
      image: "brushettaImage",
      price: "$6.79",
      description: `Our Bruschetta is made from grilled bread that has been smeared with 
                garlic and seasoned with salt and olive oil`,
    },
    {
      name: "Lemon Dessert",
      image: "lemonDessertImage",
      price: "$8.50",
      description: `This comes straight from grandma's recipe book, every last ingredient 
                has been sourced and is an authentic as can be imagined.`,
    },
  ];

  return (
    <section>
      <div>
        <h2>this</h2>
        <input type="button" value="Test" />
        <Card specialMeals={specialMeals} />
      </div>
    </section>
  );
}
