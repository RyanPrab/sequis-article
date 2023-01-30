import styles from './Header.module.css';
import Menu from './Menu/Menu';
import Link from 'next/link';
import Modal from './Modal';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header(props) {
  const [isModalShow, setIsModalShow] = useState(false);

  if (isModalShow) {
    return (
      <Modal shown={isModalShow} hideModal={() => {setIsModalShow(false)}}>
        <Menu hideMenu={() => {setIsModalShow(false)}}/>
      </Modal>
    )
  }

  return (
    <div className="flex w-full justify-between items-center">
      <Link href="/" className={`${styles.text_logo} flex items-end md:items-start md:rotate-180 bg-orange-500 text-xs md:text-sm text-black font-semibold h-14 w-28 md:h-36 md:w-20 md:rounded-l-md px-1 md:pt-2 uppercase`}
      >
        Logoooooo Web Developer
      </Link>
      <div className='hidden md:flex'>
        <Menu />
      </div>
      <div className='flex md:hidden' onClick={() => {setIsModalShow(true)}}>
        <GiHamburgerMenu className='text-orange-500 w-12 h-12'/>
      </div>
    </div>
  )
}
