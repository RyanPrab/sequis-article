import Article from './Article';

export default function FeaturedArticle(props) {
  const { articles } = props;

  if (!articles) {
    return null
  }

  return (
    <div className='flex flex-col space-y-6 p-4 bg-black items-center w-full'>
      <div className='text-white font-semibold text-xl md:text-2xl'>
        Empowering Minds
      </div>
      <div className='text-white text-md md:text-lg'>
        Insights and Strategies for Personal and Professional Growth
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          articles.slice(0, 3).map((article, index) => {
            return <Article key={index} article={article} featured />
          })
        }
      </div>
    </div>
  )
}
