import Image from "next/image";
import Link from "next/link";

export default function Article(props) {
  const { article } = props;

  return (
    <Link
      className="flex flex-col space-y-2 items-center"
      href={`/article/${article.id}`}
    >
      <div className="relative w-4/5 h-52 md:w-full md:h-60 lg:h-80 xl:h-96">
        <Image
          className="rounded-md"
          src={article.image}
          alt={article.title}
          fill
        />
      </div>
      <div className="text-xs border-2 rounded-lg px-2">
        By <span className="font-medium">{article.author}</span>
      </div>
      <div className="text-md lg:text-lg font-medium text-center">
        {article.title}
      </div>
    </Link>
  )
}
