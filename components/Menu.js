import Link from "next/link"
import { withCategory } from '../utils';
import { useState, useEffect } from 'react';

function Menu(props) {
  const { categories } = props;
  const { data: categoriesData, error: categoriesError } = categories;

  const [menu, setMenu] = useState([]);
  const initialMenu = [
    {id: 0, title: "All Artilce"}
  ];

  useEffect(() => {
    if (categoriesData) {
      setMenu([...initialMenu, ...categoriesData?.data]);
    }
  }, [categoriesData]);

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4 px-10">
      {
        menu.map((menu, index) => {
          const isOdd = index % 2 === 0 ? false : true;
          return (
            <Link
              key={index}
              href={menu.id > 0 ? (`/categories/${menu.id}`) : ({pathname: '/', query: {featured: true}})}
              className={`w-48 text-sm text-black font-medium hover:text-orange-500 ${isOdd && ('border-b-2 border-black pb-2')}`}
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
