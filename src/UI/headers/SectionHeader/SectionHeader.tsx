import Heading from "../Heading/Heading";
import classes from "./SectionHeader.module.scss";

interface Props {
    title?: string,
    subtitle?: string,
}

export default function SectionHeader({title = "", subtitle = ""}: Props) {
    return (
        <header className={classes["header-container"]}>
            {subtitle !== "" &&
            <Heading level="h6" className={classes["subtitle"]}>
                <div className={classes["rectangle"]} />
                {subtitle}
            </Heading>}
            {title !== "" &&
            <Heading level="h2">
                {title}
            </Heading>}
        </header>
    )
}