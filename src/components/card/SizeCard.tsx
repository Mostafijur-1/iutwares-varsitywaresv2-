import { useState } from "react";
import QuantityCard from "./quantityCard";
type SizeCardProps = {
  sizes: string[];
};
const SizeCard: React.FC<SizeCardProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!sizes) {
    return;
  }

  return (
    <div className="relative">
      <div className="flex flex-col px-4 ">
        <h3 className="font-semibold mr-4 ">SIZE</h3>
        <div className="flex flex-wrap gap-2 ">
          {sizes.length === 0 ? (
            <p className="text-gray-300">No sizes mentioned</p>
          ) : (
            sizes.map((size) => (
              <div
                key={size}
                className={`font-semibold rounded-full pr-2  cursor-pointer ${
                  selectedSize === size ? "text-black" : "text-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="absolute right-4 bottom-6">
        <QuantityCard />
      </div>
    </div>
  );
};

export default SizeCard;
