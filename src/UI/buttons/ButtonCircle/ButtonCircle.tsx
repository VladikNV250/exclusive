import classes from "./ButtonCircle.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function ButtonCircle({children, ...btnProps}: Props) {
    return (
        <button 
            className={classes["button-circle"]} 
            {...btnProps}
        >
            {children}
        </button>
    )
}