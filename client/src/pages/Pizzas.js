import PizzaList from "components/PizzaList/PizzaList";
import Hero from "components/Hero/Hero";
import Image from "images/pizzabg.jpg";

const Pizzas = () => (
  <>
    <Hero
      title="Pizza Menu"
      src={Image}
      alt="Pizza pattern"
      height="300px"
      align="flex-end"
      justify="center"
    />
    <PizzaList />
  </>
);

export default Pizzas;
