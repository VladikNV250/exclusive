import Heading from "@/UI/headers/Heading/Heading";
import classes from "./CategoryCard.module.scss";
import { SVGProps, VFC } from "react";

interface Props {
    Icon: VFC<SVGProps<SVGSVGElement>>;
    children: React.ReactNode;
}

export default function CategoryCard({Icon, children}: Props) {
    return (
        <div className={classes["category-card"]}>
            <Icon className={classes["icon"]} width={56} height={56} />
            <Heading level="h6" className={classes["title"]}>
                {children}
            </Heading>
        </div>
    )
}