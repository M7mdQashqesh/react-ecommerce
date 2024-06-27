import { useEffect } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Home = ({ productCards, cart, addToCart, removeFromCart }) => {
  const navigation = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userIn");
    if (!user) {
      navigation("/login");
    }
  }, []);

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
