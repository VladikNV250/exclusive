import classes from "./Footer.module.scss";

import QRcode from "@/assets/footer/qrcode.png";
import googlePlay from "@/assets/footer/get-in-google-play.png";
import appStore from "@/assets/footer/app-store.png";
import Facebook from "@/assets/icons/facebook.svg?react";
import Twitter from "@/assets/icons/twitter.svg?react";
import Instagram from "@/assets/icons/instagram.svg?react";
import LinkedIn from "@/assets/icons/linkedin.svg?react";
import Copyright from "@/assets/icons/copyright.svg?react";

import FooterInput from "./UI/FooterInput/FooterInput";
import FooterText from "./UI/FooterText/FooterText";
import FooterLink from "./UI/FooterLink/FooterLink";
import FooterIconLinks from "./UI/FooterIconLinks/FooterIconLinks";
import FooterContent from "./UI/FooterContent/FooterContent";
import { useTranslation } from "react-i18next";


export function Footer() {
    const { t } = useTranslation();
    const links = [
        {Icon: Facebook,  url:"https://www.facebook.com/"},
        {Icon: Twitter,   url:"https://x.com/?lang=uk"},
        {Icon: Instagram, url:"https://www.instagram.com/"},
        {Icon: LinkedIn,  url:"https://ua.linkedin.com/"},
    ]

    return (
        <footer className={classes.footer}>
            <div className={classes["footer-wrapper"]}>
                <div className={classes["footer-container"]}>
                    <FooterContent heading={t("subscribe")}>
                        {/* <Logo colorStyle="white" className={classes["footer-logo"]}>
                            Exclusive
                        </Logo> */}
                        <FooterText text={t("get-discount")} />
                        <FooterInput colorStyle="white" />
                    </FooterContent>
                    <FooterContent heading={t("support")}>
                        <FooterText text="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh." maxWidth="175px"/>
                        <FooterText text="exclusive@gmail.com" />
                        <FooterText text="+88015-88888-9999" />
                    </FooterContent>
                    <FooterContent heading={t("account")}>
                        <FooterLink text={t("my-account")}                   url="/account"  />
                        <FooterLink text={`${t("log-in")}/${t("register")}`} url="/sign-up"  />
                        <FooterLink text={t("cart")}                         url="/cart"     />
                        <FooterLink text={t("wishlist")}                     url="/wishlist" />
                        <FooterLink text={t("shop")}                         url="/"         />
                    </FooterContent>
                    <FooterContent heading={t("quick-link")}>
                        <FooterLink text={t("privacy-policy")} url="/faq/privacy-policy" />
                        <FooterLink text={t("terms-of-use")} url="/faq/terms-of-use" />
                        <FooterLink text="FAQ" url="/faq" />
                        <FooterLink text={t("contact")} url="/contact" />
                    </FooterContent>
                    <FooterContent heading={t("download-app")}>
                        <p className={classes["footer-tip"]}>
                            {t("save-money")}
                        </p>
                        <div className={classes["app"]}>
                            <img src={QRcode} />
                            <div className={classes["store-container"]}>
                                <img src={googlePlay} />
                                <img src={appStore} />
                            </div>
                        </div>
                        <FooterIconLinks links={links} />
                    </FooterContent>
                </div>
            </div>
            <div className={classes["copyright-container"]}>
                <Copyright width={20} height={20} />
                <p className={classes["copyright"]}>
                    Copyright Rimel 2024. {t("all-rights-reserved")}
                </p>
            </div>
        </footer>
    )
}
