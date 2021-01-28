// import { useSelector } from "react-redux";
// import { userInfo } from "../store/slices/user";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import Hero from "../components/Hero/Hero";
import { ButtonToElement } from "../components/Button/Button";
import HeroVideo from "../images/PizzaParty.mp4";
import PizzaPreview from "../components/PizzaPreview/PizzaPreview";
import { pizzas } from "../data/pizzas.js";

//images

import HeroImage from "../images/videobg1.jpg";
const Home = () => {
  // const user = useSelector(userInfo);

  const getPizzas = () => {
    return pizzas.map(({ name, image, price }) => {
      return (
        <PizzaPreview image={image.default} title={name} price={price}>
          Italian flour, whole tomato sauce, mozzarella, dorbu, raw bacon, hot
          pepper, oregano
        </PizzaPreview>
      );
    });
  };

  return (
    <>
      <Hero
        src={HeroImage}
        alt="Best Pizza in the UK!"
        videoSrc={HeroVideo}
        title="Pizza Party"
        // subtitle="Finest Pizza Party in the UK"
        align="center"
        justify="center"
        textAlign="center"
        fullHeight
        overlay
      >
        <ButtonToElement scrollToEl="pizzas">Order Now</ButtonToElement>
      </Hero>
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
    </>
  );
};

export default Home;
