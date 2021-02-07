import commerce from "utils/lib/commerce";
// import { cartId } from "store/slices/basket";
import { useEffect, useState } from "react";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    commerce.cart.retrieve().then((cart) => setCart(cart));
  }, []);

  const SubTotal = () => cart.length > 0 && cart.subtotal.formatted_with_symbol;
  return (
    <>
      <div>Checkout</div>
      <SubTotal />
    </>
  );
};

export default Checkout;
