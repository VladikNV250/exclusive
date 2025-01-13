import CategoryCard from "@/components/CategoryCarousel/UI/CategoryCard/CategoryCard";
import classes from "./CategoryCarousel.module.scss";
import { Link } from "react-router";


interface Props {
    categories: {
        Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
        name: string,
        link: string,
    }[]
    groupID: number,
    currentGroupID: number,
}

export function CategoryCarousel({categories, groupID, currentGroupID}: Props) {
    if (groupID === currentGroupID)
        return (
            <div className={classes["category-carousel"]}>
                {categories.map(({Icon, name, link}, index) => 
                    <Link key={index} to={link} className={classes["category-link"]}>
                        <CategoryCard Icon={Icon}>
                            {name}
                        </CategoryCard>
                    </Link>
                )}
            </div>
        )
}