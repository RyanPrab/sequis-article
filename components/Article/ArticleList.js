import Article from "./Article";
import ContentLoader from 'react-content-loader';

export default function ArticleList(props) {
  const { articles, error } = props;

  if (!articles || error) {
    const arrayLoader = new Array(10).fill(' ');
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-10">
        {
          arrayLoader.map((item, index) => {
            return (
              <ContentLoader
                key={index}
                speed={2}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                uniqueKey={`articleList-${index}`}
              >
                <rect x="0" y="3" rx="0" ry="0" width="100%" height="100%" />
              </ContentLoader>
            )
          })
        }
      </div>
    )
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