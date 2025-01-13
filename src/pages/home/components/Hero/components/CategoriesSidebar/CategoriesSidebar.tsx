import classes from "./CategoriesSidebar.module.scss";
import Chevron from "@/assets/icons/drop-down.svg?react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function CategoriesSidebar({className = ""}: {className: string}) {
    const { t } = useTranslation();
    const dropdownMenus = [
        {
            categoriesName: t("womens-fashion"),
            link: "/woman",
            subcategories: [
                {name: t("clothes"), link: "/woman/clothes"},
                {name: t("shoes"), link: "/woman/shoes"},
                {name: t("backpacks-bags"), link: "/woman/clothes"},
                {name: t("accessories"), link: "/woman/accessories"},
            ]
        },
        {
            categoriesName: t("mans-fashion"),
            link: "/man",
            subcategories: [
                {name: t("clothes"), link: "/man/clothes"},
                {name: t("shoes"), link: "/man/shoes"},
                {name: t("backpacks-bags"), link: "/man/clothes"},
                {name: t("accessories"), link: "/man/accessories"},
            ]
        }
    ]
    const links = [
        {name: t("electronics"), link: "/electronics"},
        {name: t("home-lifestyle"), link: "/home&lifestyle"},
        {name: t("medicine"), link: "/medicine"},
        {name: t("sports-outdoor"), link: "/sport&outdoor"},
        {name: t("babys-toys"), link: "/babys&toys"},
        {name: t("groceries-pets"), link: "/groceries&pets"},
        {name: t("health-beauty"), link: "/health&beauty"},
    ];

    return (
        <nav className={`${classes["categories-sidebar"]} ${className}`}>
            <ul className={classes["sidebar-list"]}>
                {dropdownMenus.map(({categoriesName, link, subcategories}, index) => (
                    <li key={index} className={classes["sidebar-item__category"]}>
                        <Link to={link} className={classes["sidebar-link"]}>
                            {categoriesName}
                        </Link>
                        <Chevron width={24} height={24} className={classes["sidebar-icon"]} />
                        <ul className={classes["subcategory-list"]}>
                            {subcategories.map(({name, link}, index) => (
                                <li key={index} className={classes["subcategory-item"]}>
                                    <Link to={link} className={classes["subcategory-link"]}>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
                {links.map(({name, link}, index) => (
                    <li key={index} className={classes["sidebar-item"]}>
                        <Link to={link} className={classes["sidebar-link"]}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}