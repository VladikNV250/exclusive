import classes from "./BurgerMenu.module.scss";

interface Props {
    children: React.ReactNode;
    isOpen: boolean;
}

export default function BurgerMenu({children, isOpen}: Props) {
  const classMenu = isOpen ? classes["burger-menu__open"] : classes["burger-menu"]

  return (
    <div className={classMenu}>
        {children}
    </div>
  )
}
