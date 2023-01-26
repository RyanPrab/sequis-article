import categories from '../../mock/categories.json';

export default function handler(req, res) {
  res.status(200).json(categories)
}
