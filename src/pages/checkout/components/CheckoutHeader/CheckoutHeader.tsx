import classes from "./CheckoutHeader.module.scss";

export default function CheckoutHeader({children}: {children?: React.ReactNode}) {
    return (
        <h1 className={classes["header"]}>
            {children}
        </h1>
    )
}