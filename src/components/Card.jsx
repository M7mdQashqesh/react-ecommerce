import { useEffect, useState } from "react";

const Card = ({ productCards, cart, addToCart, removeFromCart }) => {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isProductInCart = cart.some(
      (item) => item.name === productCards.name
    );
    setIsInCart(isProductInCart);
  }, [cart]);

  return (
    <div className="w-80 gap-5 max-h-96 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.05] duration-200">
      <img
        className="max-h-40 w-full rounded-t-lg"
        src={productCards.imageUrl}
        alt="producct"
      />

      <div className="p-5">
        <div className="flex justify-between items-center">
          <span className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {productCards.name}
          </span>
          <span className="mb-2 text-lg font-bold tracking-tight text-blue-700 dark:text-white">
            ${productCards.price}
          </span>
        </div>

        <p className="mt-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
          {productCards.description}
        </p>
        <div className=" flex justify-center items-center mt-6">
          {isInCart ? (
            <button
              onClick={() => removeFromCart(productCards)}
              className="items-center w-72 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(productCards)}
              className="items-center w-72 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
