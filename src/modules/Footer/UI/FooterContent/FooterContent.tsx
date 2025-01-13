import Heading from "@/UI/headers/Heading/Heading";
import classes from "./FooterContent.module.scss";

interface Props {
    children?: React.ReactNode;
    heading?: string;
}

export default function FooterContent({children, heading}: Props) {
    return (
        <div className={classes["footer-content"]}>
            <Heading level="h5" className={classes["footer-heading"]}>
                {heading}
            </Heading>
            {children}
        </div>
    )
}