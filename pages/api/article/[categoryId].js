import articles from '../../../mock/articles.json';

export default function handler(req, res) {
  const categoryId = req.query

  const filteredArticle = articles.data.filter((item) => item.categories.id == Object.values(categoryId).toString());
  res.status(200).json(filteredArticle)
}
