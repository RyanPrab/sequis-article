import Head from 'next/head';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { withArticle } from '../../utils';
import { useRouter } from 'next/router';

function DetailPage(props) {
  const { articles } = props;
  const { data: articlesData, error: articlesError } = articles;
  const router = useRouter();
  const articleId = router.query.slug;

  const articleList = articlesData?.data?.filter((item) => item.id === parseInt(articleId));

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
          Detail
        </div>
      </div>
    </DefaultLayout>
  )
};

async function init(context) {
  const { query } = context;

  if (!query.slug) {
    return {
      notFound: true
    }
  }

  return {
    props: {}
  };
};

export default withArticle(DetailPage);

export const getServerSideProps = init;
