import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  const articles = await response.json();
  return articles;
};

export default function withArticle(Child) {
  return function Article(props) {
    const url = "/api/article";
    const articles = useSWR(
      url,
      fetcher
    );

    return (
      <Child articles={articles} {...props} />
    )
  }
}
