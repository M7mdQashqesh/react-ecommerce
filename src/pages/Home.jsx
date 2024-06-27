import React, { useEffect } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Home = ({ productCards, cart, addToCart, removeFromCart, userIn }) => {
  const navigation = useNavigate();

  useEffect(() => {
    if (!userIn) {
      navigation("/login");
    }
  });

  return (
    <div className="pt-24 pb-10 flex flex-wrap justify-center gap-8 bg-[#EDF2F7]">
      {productCards.map((product) => {
        return (
          <Card
            key={product.imageUrl}
            productCards={product}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </div>
  );
};

export default Home;
