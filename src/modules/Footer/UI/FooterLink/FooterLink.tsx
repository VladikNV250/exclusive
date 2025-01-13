import { AnchorHTMLAttributes } from "react";
import classes from "./FooterLink.module.scss";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    text?: string;
    url?: string;
    otherProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

export default function FooterLink({text, url, ...otherProps}: Props) {
    return (
        <a className={classes["footer-link"]} href={url} {...otherProps}>
            {text}
        </a>
    )
}