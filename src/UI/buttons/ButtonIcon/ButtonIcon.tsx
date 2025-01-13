import { SVGProps, VFC } from "react";
import classes from "./ButtonIcon.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: VFC<SVGProps<SVGSVGElement>>;
    className?: string;
    btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function ButtonIcon({className, Icon, ...btnProps}: Props) {
    return (
        <button className={`${className} ${classes["button-icon"]}`} {...btnProps}>
            <Icon width={24} height={24} className={classes["icon"]}/>
        </button>
    )
}