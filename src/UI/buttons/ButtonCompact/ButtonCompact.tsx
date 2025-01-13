import classes from "./ButtonCompact.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function ButtonCompact({children, className, ...btnProps}: Props) {
    return (
        <button className={`${className} ${classes.button}`} {...btnProps}>
            {children}
        </button>
    )
}