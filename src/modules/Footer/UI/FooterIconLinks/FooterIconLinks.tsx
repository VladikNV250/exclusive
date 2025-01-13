import classes from "./FooterIconLinks.module.scss";

interface Props {
    links: {
        Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
            title?: string;
            titleId?: string;
            desc?: string;
            descId?: string;
        }>;
        url?: string;
    }[]
}

export default function FooterIconLinks({links}: Props) {
    return (
        <div className={classes["icon-links"]}>
            {links.map(({Icon, url}, index) => (
                <a key={index} href={url} className={classes["link"]}>
                    <Icon width={24} height={24} className={classes["icon"]}/>
                </a>
            ))}
        </div>
        
    )
}