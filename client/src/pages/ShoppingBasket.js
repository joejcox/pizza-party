import Hero from "components/Hero/Hero";
import Basket from "components/Basket/Basket";
import { useEffect } from "react";

//images
import HeroImage from "images/pizzabg.jpg";

const ShoppingBasket = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      <Hero
        src={HeroImage}
        alt="Best Pizza in the UK!"
        align="flex-end"
        justify="center"
        textAlign="left"
        overlay
      ></Hero>
      <Basket />
    </>
  );
};

export default ShoppingBasket;
