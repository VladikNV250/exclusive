import { useTranslation } from "react-i18next";
import classes from "./Story.module.scss";
import story from "@/assets/story/story-image.png";

export default function Story() {
    const { t } = useTranslation();
    
    return (
        <section className={classes["story"]}>
            <div className={classes["story-container"]}>
                <div className={classes["story-body"]}>
                    <h1 className={classes["story-title"]}>
                        {t("our-story")}
                    </h1>
                    <p className={classes["story-text"]}>
                        {t("story-text-1")}<br />
                        <br />
                        {t("story-text-2")}
                    </p>
                </div>
                <img src={story} className={classes["story-image"]} />
            </div>
        </section>
    )
}