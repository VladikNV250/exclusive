import Roadmap from "@/modules/Roadmap/Roadmap";
import classes from "./NotFound.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import { routeSlice } from "@/store/reducers/RouteSlice";
import { useAppDispatch } from "@/hooks/redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function NotFound() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { addRoute } = routeSlice.actions;
    dispatch(addRoute([{
        name: t("error-404"), link: "/not-found", level: 1,
    }]))

    return (
        <main className={classes["not-found"]}>
            <Roadmap />
            <section className={classes["not-found--section"]}>
                <div className={classes["not-found--container"]}>
                    <h1 className={classes["not-found--title"]}>
                        404 {t("not-found")}
                    </h1>
                    <p className={classes["not-found--subtitle"]}>
                        {t("not-found-description")}
                    </p>
                    <Link to="/">
                        <ButtonLarge>
                            {t("back-to-home")}
                        </ButtonLarge>
                    </Link>
                </div>
            </section>
        </main>
    )
}
