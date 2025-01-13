import classes from "./Logo.module.scss";

interface Props {
    children: React.ReactNode;
    colorStyle?: "black" | "white";
    className?: string;
}

export default function Logo({children, colorStyle = "black", className}: Props) {
    return (
        <h1 className={`${classes[`logo__${colorStyle}`]} ${className}`}>
            {children}
        </h1>
    )
}