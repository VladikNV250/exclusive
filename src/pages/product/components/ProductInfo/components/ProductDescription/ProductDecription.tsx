import classes from "./ProductDecription.module.scss";

interface Props {
    description: string;
}

export default function ProductDecription({description}: Props) {
    return (
        <p className={classes["description"]}>
            {description}
        </p>
    )
}