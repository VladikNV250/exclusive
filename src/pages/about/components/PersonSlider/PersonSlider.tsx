import { useState } from "react";
import classes from "./PersonSlider.module.scss";
import tom_cruise from "@/assets/persons/tom_cruise.png";
import emma_watson from "@/assets/persons/emma_watson.png";
import will_smith from "@/assets/persons/will_smith.png";
import CirclePagination from "@/UI/paginations/CirclePagination/CirclePagination";
import PersonCard from "./UI/PersonCard/PersonCard";
import { useTranslation } from "react-i18next";

export default function PersonSlider() {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(3);
    const personsSlides = [
        [
            {
                portrait: emma_watson,
                name: "Emma Watson",
                position: t("managing-director"),
                socialNetwork: {
                    instagram: "https://www.instagram.com/emmawatson/",
                    twitter: "https://x.com/emmawatson",
                    linkedIn: "https://uk.linkedin.com/in/emma-watson-a6192828b",
                }
            },
            {
                portrait: will_smith,
                name: "Will Smith",
                position: t("product-designer"),
                socialNetwork: {
                    instagram: "https://www.instagram.com/willsmith/",
                    twitter: "https://x.com/willsmith2real",
                    linkedIn: "https://www.linkedin.com/in/will-smith-65487a1b7",
                }
            },
            {
                portrait: tom_cruise,
                name: "Tom Cruise",
                position: `${t("founder")} & ${t("chairman")}`,
                socialNetwork: {
                    instagram: "https://www.instagram.com/tomcruise/",
                    twitter: "https://x.com/tomcruise",
                    linkedIn: "https://www.linkedin.com/in/tom-cruise-06828540",
                }
            },
        ],
        [
            {
                portrait: will_smith,
                name: "Will Smith",
                position: t("product-designer"),
                socialNetwork: {
                    instagram: "https://www.instagram.com/willsmith/",
                    twitter: "https://x.com/willsmith2real",
                    linkedIn: "https://www.linkedin.com/in/will-smith-65487a1b7",
                }
            },
            {
                portrait: tom_cruise,
                name: "Tom Cruise",
                position: `${t("founder")} & ${t("chairman")}`,
                socialNetwork: {
                    instagram: "https://www.instagram.com/tomcruise/",
                    twitter: "https://x.com/tomcruise",
                    linkedIn: "https://www.linkedin.com/in/tom-cruise-06828540",
                }
            },
            {
                portrait: emma_watson,
                name: "Emma Watson",
                position: t("managing-director"),
                socialNetwork: {
                    instagram: "https://www.instagram.com/emmawatson/",
                    twitter: "https://x.com/emmawatson",
                    linkedIn: "https://uk.linkedin.com/in/emma-watson-a6192828b",
                }
            },
        ],
        [
            {
                portrait: tom_cruise,
                name: "Tom Cruise",
                position: `${t("founder")} & ${t("chairman")}`,
                socialNetwork: {
                    instagram: "https://www.instagram.com/tomcruise/",
                    twitter: "https://x.com/tomcruise",
                    linkedIn: "https://www.linkedin.com/in/tom-cruise-06828540",
                }
            },
            {
                portrait: emma_watson,
                name: "Emma Watson",
                position: t("managing-director"),
                socialNetwork: {
                    instagram: "https://www.instagram.com/emmawatson/",
                    twitter: "https://x.com/emmawatson",
                    linkedIn: "https://uk.linkedin.com/in/emma-watson-a6192828b",
                }
            },
            {
                portrait: will_smith,
                name: "Will Smith",
                position: t("product-designer"),
                socialNetwork: {
                    instagram: "https://www.instagram.com/willsmith/",
                    twitter: "https://x.com/willsmith2real",
                    linkedIn: "https://www.linkedin.com/in/will-smith-65487a1b7",
                }
            },
        ],
        [
            {
                portrait: tom_cruise,
                name: "Tom Cruise",
                position: `${t("founder")} & ${t("chairman")}`,
                socialNetwork: {
                    instagram: "https://www.instagram.com/tomcruise/",
                    twitter: "https://x.com/tomcruise",
                    linkedIn: "https://www.linkedin.com/in/tom-cruise-06828540",
                }
            },
            {
                portrait: emma_watson,
                name: "Emma Watson",
                position: t("managing-director"),
                socialNetwork: {
                    instagram: "https://www.instagram.com/emmawatson/",
                    twitter: "https://x.com/emmawatson",
                    linkedIn: "https://uk.linkedin.com/in/emma-watson-a6192828b",
                }
            },
        ],
        [
            {
                portrait: emma_watson,
                name: "Emma Watson",
                position: t("managing-director"),
                socialNetwork: {
                    instagram: "https://www.instagram.com/emmawatson/",
                    twitter: "https://x.com/emmawatson",
                    linkedIn: "https://uk.linkedin.com/in/emma-watson-a6192828b",
                }
            },
            {
                portrait: will_smith,
                name: "Will Smith",
                position: t("product-designer"),
                socialNetwork: {
                    instagram: "https://www.instagram.com/willsmith/",
                    twitter: "https://x.com/willsmith2real",
                    linkedIn: "https://www.linkedin.com/in/will-smith-65487a1b7",
                }
            },
        ],
    ]

    const paginationHandler = (newItem: number) => {
        setCurrentSlide(newItem);
    }

    return (
        <div className={classes["person-slider"]}>
            <div className={classes["slides-container"]}>
                {personsSlides.map((slide, index) => {
                    const slideClass = index + 1 === currentSlide
                        ? classes["person-slide__selected"]
                        : classes["person-slide"];
                    return (
                        <div key={index} className={slideClass}>
                            {slide.map(({ portrait, name, position, socialNetwork }, key) => (
                                <PersonCard
                                    key={`${portrait}-${key}`}
                                    portrait={portrait}
                                    name={name}
                                    position={position}
                                    socialNetwork={socialNetwork}
                                />
                            ))}
                        </div>
                    )
                })}
            </div>
            <CirclePagination
                totalItems={5}
                currentItem={currentSlide}
                onChange={paginationHandler}
                colorStyle="black"
            />
        </div>
    )
}