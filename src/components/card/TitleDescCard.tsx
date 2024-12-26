type TitleDescCardProps = {
  title: string;
  description?: string;
};

const TitleDescCard: React.FC<TitleDescCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="px-4 pb-2">
      <h2 className="text-xl font-bold text-center text-[#3b82f6]">{title}</h2>
      {description && (
        <p className="text-gray-500 text-center overflow-hidden h-11 line-clamp-2 ">
          {description}
        </p>
      )}
    </div>
  );
};

export default TitleDescCard;
