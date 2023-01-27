import Article from "./Article";
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';
import Button from "../Button";
import { useState, useEffect } from "react";

export default function ArticleList(props) {
  const { articles, error } = props;

  const [offsetArray, setOffsetArray] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    setOffsetArray(10);
  }, [articles]);

  const moreArticleHandler = () => {
    setOffsetArray(offsetArray + 10);
  };

  useEffect(() => {
    if (articles) {
      if (articles.length <= offsetArray) {
        setIsButtonVisible(false);
      }
    }

    return () => {
      setIsButtonVisible(true);
    }
  }, [articles, offsetArray]);

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-10">
        {
          articles?.slice(0, offsetArray)?.map((article, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <Article article={article} />
              </motion.div>
            )
          })
        }
      </div>
      {isButtonVisible &&
        <Button
          onClick={moreArticleHandler}
        >
          More Article
        </Button>
      }
    </>
  )
}
