import classes from "./FooterText.module.scss";

interface Props {
    text?: string;
    maxWidth?: string;
}

export default function FooterText({text, maxWidth = "auto"}: Props) {
    return (
        <p className={classes["footer-text"]} style={{maxWidth}}>
            {text}
        </p>
    )
}