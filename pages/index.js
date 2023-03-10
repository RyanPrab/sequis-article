import Head from 'next/head';
import DefaultLayout from '../components/Layout/DefaultLayout';
import { withArticle } from '../utils';
import ArticleList from '../components/Article/ArticleList';
import FeaturedArticle from '../components/Article/FeaturedArticle';
import { useRouter } from 'next/router';

function Home(props) {
  const { articles } = props;
  const { data: articlesData, error: articlesError } = articles;
  const router = useRouter();
  const isFeatured = router.query.featured ? true : false;
  const articleId = router.query.id;
  let articleList = [];

  if (articleId) {
    articleList = articlesData?.data?.filter((item) => item.categories.id === parseInt(articleId))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } else {
    articleList = articlesData?.data?.filter((item) => item.is_featured === isFeatured)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  const featuredArticle = articlesData?.data?.filter((item) => item.is_featured === true);

  return (
    <DefaultLayout>
      <div>
        <Head>
          <title>Sequis Article</title>
          <meta name="description" content="Sequis Article" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div
          data-testid="container"
          className="flex flex-col items-center flex-1 flex-shrink-0 space-y-10 container mx-auto py-6 mt-4"
        >
          <ArticleList articles={articleList} error={articlesError}/>
          <FeaturedArticle articles={featuredArticle} error={articlesError} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default withArticle(Home);
