import articles from '../../../mock/articles.json';

export default function handler(req, res) {
  res.status(200).json(articles)
}
