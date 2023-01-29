import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';

export default function Article(props) {
  const { article, featured } = props;

  return (
    <Link
      className="flex flex-col space-y-2 items-center"
      href={`/article/${article.id}`}
    >
      <div className={`relative w-4/5 h-52 ${!featured ? ('md:w-full md:h-60 lg:h-80 xl:h-96') : ('md:w-full md:h-44 lg:h-52')}`}>
        <Image
          className="rounded-md"
          src={article.image}
          alt={article.title}
          fill
        />
      </div>
      <div className={`${featured ? ('text-white') : ('text-black')} text-xs border-2 rounded-lg px-2`}>
        By <span className="font-medium">{article.author}</span>
      </div>
      <div className={`${featured ? ('text-white') : ('text-black')} text-md lg:text-lg font-medium text-center`}>
        {article.title}
      </div>
    </Link>
  )
};

Article.propTypes = {
  article: PropTypes.object,
  featured: PropTypes.bool
};

Article.defaultProps = {
  article: {},
  featured: false
}
