import Image from "next/image";
import styles from "./Detail.module.css";
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';

export function ArticleDetail(props) {
  const { article, error } = props;

  if (!article || error) {
    return (
      <div className="flex w-full">
        <ContentLoader
          className="flex w-full h-96"
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          uniqueKey="article-detail-loader"
        >
          <rect x="0" y="3" rx="0" ry="0" width="100%" height="100%" />
        </ContentLoader>
      </div>
    )
  }

  const publishDate = new Date(article?.created_at).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <motion.div
      className="flex flex-col space-y-6 items-center w-full"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={`${styles.image_wrapper} relative w-full`}>
        <Image
          className="rounded-md object-fit"
          src={article?.image}
          alt={article?.title}
          fill
        />
        <div className="absolute bg-white flex flex-col space-y-0.5 rounded-tr-md p-2 bottom-0">
          <div className="text-xs">
            {`Published ${publishDate}`}
          </div>
          <div className="text-xs">
            By <span className="font-medium">{article.author}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 px-14 w-full">
        <h1 className="text-black font-semibold text-center text-xl md:text-2xl">
          {article.title}
        </h1>
        <h2 className="text-black text-center font-medium text-md md:text-lg">
          {article.summary}
        </h2>
        <hr className="font-bold border-t border-gray-500 w-full h-4"/>
        <div className="flex flex-col space-y-4 w-full">
          {
            article?.content?.split(/\n\n/).map((text, index) => {
              return (
                <h3 key={index} className="text-sm md:text-md text-justify">
                  {text}
                </h3>
              )
            })
          }
        </div>
      </div>
    </motion.div>
  )
}
