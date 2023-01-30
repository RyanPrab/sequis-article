import Link from "next/link"
import { withCategory } from '../../utils';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import PropTypes from 'prop-types';

function Menu(props) {
  const { categories, hideMenu } = props;
  const { data: categoriesData, error: categoriesError } = categories;
  const router = useRouter();
  const isFeatured = router.query.featured ? true : false;
  const articleId = router.query.id;

  const [menu, setMenu] = useState([]);
  const initialMenu = [
    {id: 0, title: "All Articles"}
  ];

  useEffect(() => {
    if (categoriesData) {
      setMenu([...initialMenu, ...categoriesData?.data]);
    }
  }, [categoriesData]);

  return (
    <div className="grid grid-cols-1 md:grid-rows-2 md:grid-flow-col gap-2 md:gap-4 px-10 w-full text-center md:text-start">
      {
        menu.map((menu, index) => {
          const isOdd = index % 2 === 0 ? false : true;
          let isActive = false;

          if (articleId) {
            isActive = menu.id === parseInt(articleId);
          } else if (isFeatured) {
            isActive = menu.id === 0;
          }

          return (
            <Link
              key={index}
              href={menu.id > 0 ? ({pathname: '/', query: {id: menu.id}}) : ({pathname: '/', query: {featured: true}})}
              className={`w-full md:w-48 text-sm font-medium hover:text-orange-500 ${isActive ? ('text-orange-500') : ('text-black ')} ${isOdd && ('md:border-b-2 md:border-black mb:pb-2')}`}
              onClick={hideMenu}
            >
              {menu.title}
            </Link>
          )
        })
      }
    </div>
  )
}

export default withCategory(Menu);

Menu.propTypes = {
  categories: PropTypes.object,
  hideMenu: PropTypes.func
};

Menu.defaultProps = {
  categories: {},
  hideMenu: () => {}
}
