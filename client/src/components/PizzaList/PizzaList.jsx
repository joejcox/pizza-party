import { useEffect, useState } from "react";
import commerce from "utils/lib/commerce";
// import { pizzas } from "data/pizzas";
import Section from "components/Section/Section";
import Container from "components/Container/Container";
import PizzaPreview from "./PizzaPreview/PizzaPreview";
import LoadingIcon from "components/LoadingIcon/LoadingIcon";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    commerce.products
      .list()
      .then((res) => setPizzas(res.data))
      .catch((err) => console.log(`Error getting Pizzas: ${err}`))
      .finally(() => setLoading(false));
  }, [loading]);

  // const getPizzas = pizzas.map(({ name, image, price }) => {
  //   return (
  //     <PizzaPreview image={image.default} title={name} price={price} key={name}>
  //       Italian flour, whole tomato sauce, mozzarella, dorbu, raw bacon, hot
  //       pepper, oregano
  //     </PizzaPreview>
  //   );
  // });

  const getPizzas = pizzas.map(({ id, name, description, media, price }) => {
    return (
      <PizzaPreview
        id={id}
        image={media.source}
        title={name}
        price={price.raw}
        key={id}
      >
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </PizzaPreview>
    );
  });

  return (
    <Section id="pizzas">
      <Container>
        <div
          className="uk-grid-medium uk-child-width-1-2@l uk-child-width-1-1@m"
          data-uk-grid
        >
          {loading ? <LoadingIcon /> : getPizzas}
        </div>
      </Container>
    </Section>
  );
};

export default PizzaList;
