import Heading from "@/UI/headers/Heading/Heading";
import classes from "./StatisticCard.module.scss";

interface Props {
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    title: string,
    subtitle: string,
}

export default function StatisticCard({Icon, title, subtitle}: Props) {
    return (
        <div className={classes["statistic-card"]}>
            <div className={classes["icon-container"]}>
                <div className={classes["icon-circle__inner"]} />
                <div className={classes["icon-circle__outer"]} />
                <Icon className={classes["icon-item"]} width={40} height={40} />
            </div>
            <Heading level="h3" className={classes["statistic-title"]}>
                {title}
            </Heading>
            <p className={classes["statistic-subtitle"]}>
                {subtitle}
            </p>
        </div>
    )
}