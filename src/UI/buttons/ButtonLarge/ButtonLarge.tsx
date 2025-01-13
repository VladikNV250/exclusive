import classes from "./ButtonLarge.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function ButtonLarge({children, className = "", ...btnProps}: Props) {
    return (
        <button className={`${className} ${classes.button}`} {...btnProps}>
            {children}
        </button>
    )
}