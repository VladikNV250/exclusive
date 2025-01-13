import classes from "./ButtonOutlined.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function ButtonOutlined({children, ...btnProps}: Props) {
    return (
        <button className={classes.button} {...btnProps}>
            {children}
        </button>
    )
}