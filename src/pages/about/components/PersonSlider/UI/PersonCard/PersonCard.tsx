import Heading from "@/UI/headers/Heading/Heading";
import classes from "./PersonCard.module.scss";
import Instagram from "@/assets/icons/instagram.svg?react";
import Twitter from "@/assets/icons/twitter.svg?react";
import LinkedIn from "@/assets/icons/linkedin.svg?react";
import { Link } from "react-router";

interface Props {
    portrait: string,
    name: string,
    position: string,
    socialNetwork: {
        instagram?: string,
        twitter?: string,
        linkedIn?: string
    }
}

export default function PersonCard({portrait, position, name, socialNetwork}: Props) {
    return (
        <div className={classes["person-card"]}>
            <div className={classes["person-portrait--container"]}>
                <img src={portrait} alt={name} className={classes["person-portrait"]} />
            </div>
            <Heading level="h3" className={classes["person-name"]}>
                {name}
            </Heading>
            <p className={classes["person-position"]}>
                {position}
            </p>
            <div className={classes["person-links"]}>
                {socialNetwork.twitter &&
                <Link to={socialNetwork.twitter} className={classes["person-link"]}>
                    <Twitter width={24} height={24} />  
                </Link>}
                {socialNetwork.instagram &&
                <Link to={socialNetwork.instagram} className={classes["person-link"]}>
                    <Instagram width={24} height={24} />  
                </Link>}
                {socialNetwork.linkedIn &&
                <Link to={socialNetwork.linkedIn} className={classes["person-link"]}>
                    <LinkedIn width={24} height={24} />  
                </Link>}
            </div>
        </div>
    )
}