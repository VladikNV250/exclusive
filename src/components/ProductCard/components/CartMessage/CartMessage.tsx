import { useTranslation } from "react-i18next";
import Message from "@/components/Message/Message";
import classes from "./CartMessage.module.scss";
import { Link } from "react-router";

interface Props {
    isOpen: boolean;
}

export default function CartMessage({isOpen}: Props) {
    const { t } = useTranslation();
    
    return (
        <Message isOpen={isOpen}>
            <p>
                {t("added-to-cart")}
            </p>
            <Link to={"/cart"} className={classes["message-link"]}>
                {t("to-cart")}
            </Link>
        </Message>    
    );
}