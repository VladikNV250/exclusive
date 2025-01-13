import Roadmap from "@/modules/Roadmap/Roadmap";
import { ServiceList } from "@/components/ServiceList/ServiceList";
import Story from "@/pages/about/components/Story/Story";
import classes from "@/pages/about/About.module.scss";
import StatisticList from "./components/StatisticList/StatisticList";
import PersonSlider from "./components/PersonSlider/PersonSlider";
import { useAppDispatch } from "@/hooks/redux";
import { routeSlice } from "@/store/reducers/RouteSlice";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {addRoute} = routeSlice.actions;
  dispatch(addRoute([{
    name: t("about"), link: "/about", level: 1,
  }]))

  return (
    <main className={classes["about"]}>
        <Roadmap />
        <Story />
        <section className={classes["about-section"]}>
          <div className={classes["about-container"]}>
            <StatisticList />
            <PersonSlider />
            <ServiceList />
          </div>
        </section>
    </main>
  )
}
