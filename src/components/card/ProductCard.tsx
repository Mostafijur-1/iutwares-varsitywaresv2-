import AddCart from "./AddCart";
// import ColorCard from "./ColorCard";
import ImgCard from "./ImgCard";
import PriceReviewCard from "./PriceReviewCard";
import SizeCard from "./SizeCard";
import TitleDescCard from "./TitleDescCard";
import TopCurvCard from "./TopCurvCard";

type Product = {
  name: string;
  price: number;
  shortDescription: string;
  description?: string;
  image: string[];
  rating?: number;
  sizes: string[];
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, shortDescription, image, rating = 5, sizes } = product;

  return (
    <div className="w-64 h-auto bg-white rounded-lg shadow-lg m-4">
      <TopCurvCard />
      <TitleDescCard title={name} description={shortDescription} />
      <ImgCard image={image} />
      <PriceReviewCard price={price} rating={rating} />
      <SizeCard sizes={sizes} />
      {/* <ColorCard colors={colors} /> */}
      <AddCart />
    </div>
  );
};

export default ProductCard;
