import { useState } from "react";
import { TiTick } from "react-icons/ti";

type ColorCardProps = {
  colors: string[] | null;
};

const ColorCard: React.FC<ColorCardProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className="flex flex-col px-4">
      <h3 className="font-semibold mb-1">COLORS</h3>
      <div className="flex gap-4">
        {colors &&
          colors.map((color) => (
            <div
              key={color}
              className="w-5 h-5 rounded-full cursor-pointer relative flex items-center justify-center "
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              title={color}
            >
              {selectedColor === color && (
                <span className="text-white text-lg">
                  <TiTick />
                </span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ColorCard;
