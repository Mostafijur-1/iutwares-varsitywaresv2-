const TopCurvCard = () => {
  return (
    <div className="relative w-full h-4 ">
      <svg
        className="absolute w-full h-12 rounded-lg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#3b82f6" // Change to match your background color
          d="M0,0 L0,250 C0,250 80,60 250,50 L1190,50  C1190,50 1360,60 1440,250 L1440,0 Z"
        />
      </svg>
    </div>
  );
};

export default TopCurvCard;
