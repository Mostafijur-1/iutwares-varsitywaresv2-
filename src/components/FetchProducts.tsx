const products = [
  {
    name: "Children Shirt",
    id: 1,
    price: 45,
    shortDescription: "Soft and comfortable shirt for kids.",
    description: "Made with high-quality materials, perfect for daily wear.",
    image: [
      "https://res.cloudinary.com/dj0grvabc/image/upload/v1721033969/products/eimxhj769cuqf6j75ua7.jpg",
      "https://res.cloudinary.com/dj0grvabc/image/upload/v1720348654/products/xozahdp9clraghgptmpy.jpg",
      "https://res.cloudinary.com/dj0grvabc/image/upload/v1720341020/products/i7zqk7qrtaqvehirywto.jpg",
    ],
    rating: 4.3,
    sizes: ["XS", "S", "M", "L"],
    colors: ["#FF5733", "#900C3F", "#FFC300"],
  },
  {
    name: "Men's Casual cap",
    id: 2,
    price: 80,
    shortDescription: "Stylish and durable casual shoes.",
    image: [
      "https://res.cloudinary.com/dj0grvabc/image/upload/v1720348756/products/dee8w1pkjana4mwlzxhp.jpg",
      "https://res.cloudinary.com/dj0grvabc/image/upload/v1720341020/products/i7zqk7qrtaqvehirywto.jpg",
      "https://res.cloudinary.com/dj0grvabc/image/upload/v1721033969/products/eimxhj769cuqf6j75ua7.jpg",
    ],
    rating: 5,
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["#4CAF50", "#2196F3"],
  },
  {
    name: "TShirt",
    id: 3,
    price: 120,

    shortDescription: "Elegant and spacious handbag.",
    description: "Crafted with premium leather and perfect for all occasions.",
    image: [
      "https://res.cloudinary.com/dj0grvabc/image/upload/v1721033969/products/eimxhj769cuqf6j75ua7.jpg",
      "https://res.cloudinary.com/dj0grvabc/image/upload/v1720348654/products/xozahdp9clraghgptmpy.jpg",
      "https://res.cloudinary.com/dj0grvabc/image/upload/v1721033969/products/eimxhj769cuqf6j75ua7.jpg",
    ],
    sizes: [],
    colors: ["#E91E63", "#FFEB3B"],
  },
  {
    name: "Wireless Headphones",
    id: 4,
    price: 150,
    shortDescription: "High-quality sound with active noise cancellation.",
    image: [
      "https://via.placeholder.com/300/607D8B",
      "https://via.placeholder.com/300/9E9E9E",
    ],
    rating: 4,
    sizes: [],
    colors: ["#607D8B", "#9E9E9E"],
  },
  {
    name: "Smart Watch",
    id: 5,
    price: 200,
    shortDescription:
      "Stay connected and track your fitnesnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnns.",
    description:
      "Features include heart rate monitoring, GPS, and water resistance.",
    image: ["https://via.placeholder.com/300/FF9800"],
    rating: 3.8,
    sizes: [],
    colors: ["#FF9800"],
  },
];

import React from "react";
import ProductCard from "./card/ProductCard";

const FetchProducts = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap mt-10 ">
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default FetchProducts;
