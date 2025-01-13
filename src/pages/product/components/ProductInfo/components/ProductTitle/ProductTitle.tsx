import classes from "./ProductTitle.module.scss";

interface Props {
    title: string
}

export default function ProductTitle({title}: Props) {
    return (
        <h3 className={classes["title"]}>{title}</h3>
    )
}