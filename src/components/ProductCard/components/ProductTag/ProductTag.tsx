import classes from "./ProductTag.module.scss";

interface Props {
    type?: "new" | "discount";
    children?: React.ReactNode;
}

export function ProductTag({type = "new", children}: Props) {
    return (
        <div className={classes[`tag__${type}`]}>
            {type === "new"
            ? "NEW"
            : children}
        </div>
    )
}