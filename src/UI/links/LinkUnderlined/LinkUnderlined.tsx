import { NavLink } from "react-router";
import classes from "./LinkUnderlined.module.scss";

interface Props {
    to: string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

export default function LinkUnderlined({to, onClick, children, className = ""}: Props) {
    return (
        <NavLink 
            className={({isActive}: {isActive: boolean}) => 
                isActive ? `${classes["link"]} ${classes["link__current"]} ${className}` : `${classes["link"]} ${className}`
            } 
            to={to}
            onClick={onClick}
        >
            {children}
        </NavLink>
    )
}