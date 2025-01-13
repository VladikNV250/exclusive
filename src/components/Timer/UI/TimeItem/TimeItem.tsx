import Heading from "@/UI/headers/Heading/Heading";
import classes from "./TimeItem.module.scss";


interface Props {
    unit?: string;
    time?: number;
    type?: "circle" | "text";
    color?: "black" | "white";
}

export default function TimeItem({unit = "Seconds", time = 0, type = "circle", color = "black"}: Props) {
    const itemClass = `${classes[`time-item__${type}`]} ${classes[`time-item__${color}`]}`
    const numberFormat = new Intl.NumberFormat(
        "en",
        {
            minimumIntegerDigits: 2,
        }
    )

    return (
        <div className={itemClass}>
            <p className={classes["unit"]}>
                {unit}
            </p>
            <Heading level="h3" className={classes["time"]}>
                {numberFormat.format(time)}
            </Heading>
        </div>
    )
}