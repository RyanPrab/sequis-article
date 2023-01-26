import Head from 'next/head'
import DefaultLayout from '../components/Layout/DefaultLayout'

export default function Home() {
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
          Article List
        </div>
      </div>
    </DefaultLayout>
  )
}
