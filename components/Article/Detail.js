import Image from "next/image";
import styles from "./Detail.module.css";

export function ArticleDetail(props) {
  const { article, error } = props;

  return (
    <div className="flex flex-col space-y-6 items-center w-full">
      <div className={`${styles.image_wrapper} relative w-full`}>
        <Image
          className="rounded-md object-fit"
          src={article?.image}
          alt={article?.title}
          fill
        />
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
    </div>
  )
}
