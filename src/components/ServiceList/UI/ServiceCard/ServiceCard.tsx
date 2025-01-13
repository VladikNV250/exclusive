import { SVGProps, VFC } from "react";
import classes from "./ServiceCard.module.scss";
import Heading from "@/UI/headers/Heading/Heading";

interface Props {
    Icon: VFC<SVGProps<SVGSVGElement>>;
    title: string;
    subtitle: string;
}

export default function ServiceCard({Icon, title, subtitle}: Props) {
    return (
        <div className={classes["service-card"]}>
            <div className={classes["icon-container"]}>
                <div className={classes["icon-circle__inner"]} />
                <div className={classes["icon-circle__outer"]} />
                <Icon className={classes["icon-item"]} width={40} height={40} />
            </div>
            <Heading level="h5" className={classes["title"]}>
                {title}
            </Heading>
            <p className={classes["subtitle"]}>
                {subtitle}
            </p>
        </div>
    )
}