import Roadmap from "@/components/Roadmap/Roadmap";
import classes from "./NotFound.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import { Link } from "react-router-dom";
import { routeSlice } from "@/store/reducers/RouteSlice";
import { useAppDispatch } from "@/hooks/redux";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {addRoute} = routeSlice.actions;
  dispatch(addRoute([{
      name: t("error-404"), link: "/not-found", level: 1,
  }]))

  return (
    <main className={classes["not-found"]}>
        <div className={classes["not-found--container"]}>
          <Roadmap />
          <section className={classes["not-found--content"]}>
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
          </section>
        </div>
    </main>
  )
}
