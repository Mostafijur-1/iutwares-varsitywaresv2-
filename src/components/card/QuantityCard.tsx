import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const QuantityCard = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setQuantity(quantity - 1);
        }}
        disabled={quantity === 1}
        className={`border-2 p-1 mr-3 text-slate-400 rounded-lg ${
          quantity > 1 ? "hover:bg-slate-300" : ""
        } `}
      >
        <FiMinus />
      </button>
      {quantity}
      <button
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        className="border-2 p-1 ml-3 text-slate-400 rounded-lg hover:bg-slate-300"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default QuantityCard;
