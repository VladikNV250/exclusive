import classes from "./UserAuth.module.scss";
import Heading from "@/UI/headers/Heading/Heading";
import image from "@/assets/login/login-image.png";
import LinkUnderlined from "@/UI/links/LinkUnderlined/LinkUnderlined";
import SignUpForm from "@/modules/UserAuth/components/SignUpForm/SignUpForm";
import LogInForm from "@/modules/UserAuth/components/LogInForm/LogInForm";
import { useTranslation } from "react-i18next";

interface Props {
    type: "log-in" | "sign-up";
}

export function UserAuth({type}: Props) {
    const { t } = useTranslation();

    return (
        <section className={classes["auth"]}>
            <div className={classes["auth-container"]}>
                <img src={image} className={classes["auth-image"]} />
                <div className={classes["auth-content"]}>
                    <Heading level="h2" className={classes["auth-title"]}>
                        {type === "log-in" && t("log-in-title")}
                        {type === "sign-up" && t("sign-up-title")}
                    </Heading>
                    <p className={classes["auth-subtitle"]}>
                        {t("enter-details")}
                    </p>
                    {type === "sign-up" && <SignUpForm />}
                    {type === "log-in" && <LogInForm />}
                    {type === "sign-up" &&
                    <div className={classes["auth-body"]}>
                        <p className={classes["auth-text"]}>
                            {t("have-account")}?
                        </p>
                        <div className={classes["link-wrapper"]}>
                            <LinkUnderlined to="/log-in">
                                {t("log-in")}
                            </LinkUnderlined>
                        </div>
                    </div>}
                </div>
            </div>
        </section>

    )
}