import Article from "./Article";

export default function ArticleList(props) {
  const { articles } = props;

  if (!articles) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-10">
      {
        articles?.data?.map((article, index) => {
          return (
            <Article key={index} article={article} />
          )
        })
      }
    </div>
  )
}
