import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import classes from "./NewArrival.module.scss";
import { ServiceList } from "@/components/ServiceList/ServiceList";
import playstation from "@/assets/new-arrival/playstation.png";
import perfume from "@/assets/new-arrival/perfume.png";
import speakers from "@/assets/new-arrival/speakers.png";
import woman from "@/assets/new-arrival/woman.png";
import NewArrivalCard from "@/pages/home/components/NewArrival/UI/NewArrivalCard/NewArrivalCard";
import { useTranslation } from "react-i18next";

export default function NewArrival() {
    const { t } = useTranslation();
    const items= [
        {
            image: {src: playstation, class: "biggy"}, 
            title: "PlayStation 5", 
            subtitle: t("playstation-description"), 
            link: "/electronics",
            layout: {
                columnStart: 1,
                columnEnd: 3,
                rowStart: 1,
                rowEnd: 3,
            }
        },
        {
            image: {src: woman, class: "widely"}, 
            title: t("womens-collections"), 
            subtitle: t("womens-collections-description"), 
            link: "/woman",
            layout: {
                columnStart: 3,
                columnEnd: 5,
                rowStart: 1,
                rowEnd: 2,
            }
        },
        {
            image: {src: speakers, class: "square"}, 
            title: t("speakers"), 
            subtitle: t("speakers-description"), 
            link: "/electronics",
            blur: true,
            layout: {
                columnStart: 3,
                columnEnd: 4,
                rowStart: 2,
                rowEnd: 3,
            }
        },
        {
            image: {src: perfume, class: "square"}, 
            title: t("perfume"), 
            subtitle: "GUCCI INTENSE OUD EDP", 
            link: "/health&beauty",
            blur: true,
            layout: {
                columnStart: 4,
                columnEnd: 5,
                rowStart: 2,
                rowEnd: 3,
            }
        },
    ];

    return (
        <section className={classes["new-arrival"]}>
            <div className={classes["new-arrival--container"]}>
                <SectionHeader subtitle={t("featured")} title={t("new-arrival")} />
                <div className={classes["new-arrival--content"]}>
                    {items.map(({title, subtitle, link, layout, blur, image}, key) => 
                        <NewArrivalCard
                            key={key}
                            title={title}
                            subtitle={subtitle}
                            link={link}
                            layout={layout}
                            blur={blur ? blur : false}
                            image={<img src={image.src} className={classes[`image-${image.class}`]} />}
                        />
                    )}
                </div>
                <ServiceList />
            </div>
        </section>
    )
}