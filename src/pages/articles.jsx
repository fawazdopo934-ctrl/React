import ArticleCard from "../../composants/ArticleCard";

const Articles = () => {
  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-7">
        <ArticleCard
          title="Marketing Digital"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus fugit veniam magni nisi rem provident, accusamus sapiente iusto corporis aliquid quaerat suscipit temporibus placeat tenetur, odio quos ratione. Quas!"
        />
        <ArticleCard
          title="Développement"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus fugit veniam magni nisi rem provident, accusamus sapiente iusto corporis aliquid quaerat suscipit temporibus placeat tenetur, odio quos ratione. Quas!"
        />
        <ArticleCard
          title="Création de site web"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus fugit veniam magni nisi rem provident, accusamus sapiente iusto corporis aliquid quaerat suscipit temporibus placeat tenetur, odio quos ratione. Quas!"
        />
      </div>
    </>
  );
};

export default Articles;
