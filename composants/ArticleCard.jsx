// eslint-disable-next-line react/prop-types
const ArticleCard = ({ title, description }) => {
  return (
    <div className="shadow-2xl rounded-2xl bg-gray-300 p-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
      <button
        className="p-2 border-0 bg-blue-600 rounded-2xl mt-2"
        onClick={() => console.log(title, description)}
      >
        Lire plus
      </button>
    </div>
  );
};

export default ArticleCard;
