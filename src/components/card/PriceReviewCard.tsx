import { TbCurrencyTaka } from "react-icons/tb";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type PriceReviewCardProps = {
  price: number;
  rating: number;
};

const PriceReviewCard: React.FC<PriceReviewCardProps> = ({ price, rating }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <FaStar key={`full-${index}`} className="text-yellow-500" />
          ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill(null)
          .map((_, index) => (
            <FaStar key={`empty-${index}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  return (
    <div className="pr-4 pl-3 py-2  flex justify-between items-center rounded-md ">
      <div className="flex items-center">
        <p className=" text-2xl font-bold text-gray-800 flex items-center">
          <TbCurrencyTaka className="text-3xl " />
          {price}
        </p>
      </div>
      <div className="flex items-center space-x-1">{renderStars()}</div>
    </div>
  );
};

export default PriceReviewCard;
