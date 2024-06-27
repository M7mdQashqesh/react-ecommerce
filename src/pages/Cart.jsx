import React, { useEffect } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Cart = ({ removeFromCart, cart }) => {
  const navigation = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userIn");
    if (!user) {
      navigation("/login");
    }
  }, []);

  return (
    <div className="pt-24 pb-10 flex flex-wrap justify-center gap-8 bg-[#EDF2F7] min-h-screen h-full">
      {cart && cart.length >= 1 ? (
        cart.map((product) => {
          return (
            <Card
              key={product.imageUrl}
              productCards={product}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          );
        })
      ) : (
        <div className="fixed top-1/2 right-2/4 translate-x-2/4 translate-y-2/4">
          <span className="text-blue-700 text-2xl">No items in the Cart</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
