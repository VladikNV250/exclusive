import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import classes from "./Category.module.scss";
import ButtonNavigation from "@/UI/buttons/ButtonNavigation/ButtonNavigation";
import { CategoryCarousel } from "@/components/CategoryCarousel/CategoryCarousel";
import { useState } from "react";
import Phone from "@/assets/category-icon/cell-phone.svg?react";
import Camera from "@/assets/category-icon/camera.svg?react";
import Computer from "@/assets/category-icon/computer.svg?react";
import Gamepad from "@/assets/category-icon/gamepad.svg?react";
import Headphone from "@/assets/category-icon/headphone.svg?react";
import SmartWatch from "@/assets/category-icon/smart-watch.svg?react";
import { useTranslation } from "react-i18next";


export default function Category() {
    const { t } = useTranslation();
    const [currentGroupID, setCurrentGroupId] = useState(0);
    const groupCategories = [
        [
            {Icon: Phone,      name: t("phones"),      link: "/electronics/#phones"},
            {Icon: Computer,   name: t("computers"),   link: "/electronics/#computers"},
            {Icon: SmartWatch, name: t("smart-watch"), link: "/electronics/#watchs"},
            {Icon: Camera,     name: t("cameras"),     link: "/electronics/#cameras"},
            {Icon: Headphone,  name: t("headphones"),  link: "/electronics/#headphones"},
            {Icon: Gamepad,    name: t("gaming"),      link: "/electronics/#gaming"},
        ],
        [
            {Icon: Camera,     name: t("clothes"),     link: "/woman/#clothes"},
            {Icon: Phone,      name: t("shoes"),      link: "/woman/#shoes"},
            {Icon: Gamepad,    name: t("backpacks-bags"),      link: "/woman/#backpacks"},
            {Icon: Computer,   name: t("accessories"),   link: "/woman/#accesories"},
            {Icon: SmartWatch, name: t("home-lifestyle"), link: "/home&lifestyle"},
            {Icon: Headphone,  name: t("medicine"),  link: "/medicine"},
        ],
        [
            {Icon: Phone,      name: t("sports"),      link: "/sport&outdoor"},
            {Icon: SmartWatch, name: t("babys-toys"), link: "/babys&toys"},
            {Icon: Computer,   name: t("groceries"),   link: "/groceries&pets"},
            {Icon: Camera,     name: t("health"),     link: "/health&beauty"},
            {Icon: Headphone,  name: t("beauty"),  link: "/health&beauty"},
            {Icon: Gamepad,    name: t("pets"),      link: "/groceries&pets"},
        ],
    ];
    
    const slideRight = () => {
        if (currentGroupID < groupCategories.length - 1)
            setCurrentGroupId(currentGroupID => currentGroupID + 1);
        else
            setCurrentGroupId(0);
    }
    
    const slideLeft = () => {
        if (currentGroupID > 0)
            setCurrentGroupId(currentGroupID => currentGroupID - 1);
        else
            setCurrentGroupId(groupCategories.length - 1);
    }
    
    return (
        <section className={classes["category-section"]}>
            <div className={classes["category-container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle={t("categories")} title={t("browse-by-category")} />
                    <div className={classes["button-container"]}>
                        <ButtonNavigation 
                            direction="left"
                            onClick={slideLeft} 
                        />
                        <ButtonNavigation 
                            direction="right" 
                            onClick={slideRight}
                        />
                    </div>
                </div>
                <div className={classes["carousel"]}>
                    {groupCategories.map((categories, index) => 
                        <CategoryCarousel
                            categories={categories}
                            currentGroupID={currentGroupID}
                            groupID={index}
                            key={index}
                        />            
                    )}
                </div>
            </div>
        </section>
    )
}