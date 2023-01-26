import styles from './Header.module.css';

export default function Header(props) {
  const { categories } = props;
  return (
    <div className="flex w-full justify-between items-center">
      <div className={`${styles.text_logo} flex items-end md:items-start md:rotate-180 bg-orange-500 text-xs md:text-sm text-black font-semibold h-14 w-28 md:h-36 md:w-20 md:rounded-l-md px-1 md:pt-2 uppercase`}
      >
        Logoooooo Web Developer
      </div>
      <div>
        Menu Section
      </div>
    </div>
  )
}
