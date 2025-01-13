import classes from "./ButtonBurger.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isOpen: boolean;
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function ButtonBurger({isOpen, ...props}: Props) {
    const classBurger = isOpen ? classes["burger__open"] : classes["burger"];

  return (
    <button className={classes.button} {...props}>
        <div className={classBurger}>
          <div className={classes["line"]} />
          <div className={classes["line"]} />
          <div className={classes["line"]} />
          <div className={classes["line"]} />  
        </div>
    </button>
  )
}
