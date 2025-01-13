import Roadmap from "@/modules/Roadmap/Roadmap";
import classes from "./Contact.module.scss";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import ContactForm from "./components/ContactForm/ContactForm";
// import { useAppDispatch } from "@/hooks/redux";
// import { routeSlice } from "@/store/reducers/RouteSlice";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    // const dispatch = useAppDispatch();
    // const {addRoute} = routeSlice.actions;
    // dispatch(addRoute([{
    //     name: t("contact"), link: "/contact", level: 1,
    // }]))

    return (
        <main>
            <Roadmap />
            <section className={classes["contact-section"]}>
                <div className={classes["contact-container"]}>
                    <ContactInfo />
                    <ContactForm />
                </div>        
            </section>
        </main>
    )
}