import { pizzas } from "data/pizzas";
import Section from "components/Section/Section";
import Container from "components/Container/Container";
import PizzaPreview from "components/PizzaPreview/PizzaPreview";

const PizzaList = () => {
  const getPizzas = () => {
    return pizzas.map(({ name, image, price }) => {
      return (
        <PizzaPreview
          image={image.default}
          title={name}
          price={price}
          key={name}
        >
          Italian flour, whole tomato sauce, mozzarella, dorbu, raw bacon, hot
          pepper, oregano
        </PizzaPreview>
      );
    });
  };

  return (
    <Section id="pizzas" size="large">
      <Container>
        <div
          className="uk-grid-medium uk-child-width-1-2@l uk-child-width-1-1@m"
          data-uk-grid
        >
          {getPizzas()}
        </div>
      </Container>
    </Section>
  );
};

export default PizzaList;
