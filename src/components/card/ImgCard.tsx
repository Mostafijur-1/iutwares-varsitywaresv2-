import { useState } from "react";

type ImgCardProps = {
  image: string[];
};

const ImgCard: React.FC<ImgCardProps> = ({ image }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Handle swipe navigation
  const handleSwipe = () => {
    if (touchStart !== null && touchEnd !== null) {
      const swipeDistance = touchStart - touchEnd;

      if (swipeDistance > 50) {
        // Swipe left -> next image
        setCurrentImageIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        );
      } else if (swipeDistance < -50) {
        // Swipe right -> previous image
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? image.length - 1 : prevIndex - 1
        );
      }
    }

    // Reset swipe states
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (image.length === 0) {
    return (
      <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-lg">
        No Image Available
      </div>
    );
  }

  return (
    <div
      className="relative mx-4 h-40 py-2 bg-gray-100 rounded-lg"
      onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
      onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
      onTouchEnd={handleSwipe}
    >
      {/* Display Current Image */}
      <img
        src={image[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="rounded-lg object-contain w-full h-full transition-transform duration-300 ease-in-out"
      />

      {/* Navigation Circles */}
      {image.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {image.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out transform ${
                currentImageIndex === index
                  ? "bg-[#3b82f6] scale-110 shadow-md"
                  : "bg-gray-300 scale-100"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              tabIndex={0}
              aria-label={`Select image ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImgCard;
