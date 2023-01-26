import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  const categories = await response.json();
  return categories;
};

export default function withCategory(Child) {
  return function Category(props) {
    const url = "/api/category";
    const categories = useSWR(
      url,
      fetcher
    );

    return (
      <Child categories={categories} {...props} />
    )
  }
}
