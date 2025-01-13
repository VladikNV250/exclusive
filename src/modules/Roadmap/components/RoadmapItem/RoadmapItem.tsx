import classes from "./RoadmapItem.module.scss";
import { Link } from "react-router";

interface Props {
    isLast: boolean,
    link: string,
    name: string
}

export default function RoadmapItem({ isLast, link, name }: Props) {
    const linkClass = isLast ? classes["roadmap-link__current"] : classes["roadmap-link"];

    return (
        <>
            <Link className={linkClass} to={link}>
                {name}
            </Link>
            {!isLast &&
                <div className={classes["roadmap-separator"]}>
                    /
                </div>
            }
        </>
    )
}