import Head from 'next/head';
import DefaultLayout from '../components/Layout/DefaultLayout';
import { withCategory } from '../utils';

function Home(props) {
  const { categories } = props;
  const { data: categoriesData, error: categoriesError } = categories;

  return (
    <DefaultLayout
      categories={categoriesData}
    >
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
          Article List
        </div>
      </div>
    </DefaultLayout>
  )
}

export default withCategory(Home);
