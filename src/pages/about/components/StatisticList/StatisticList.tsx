import classes from "./StatisticList.module.scss";

import Store from "@/assets/icons/shop-one.svg?react";
import Dollar from "@/assets/icons/sale.svg?react";
import ShoppingBag from "@/assets/icons/shopping-bag.svg?react";
import MoneyBag from "@/assets/icons/money-bag.svg?react";

import StatisticCard from "./UI/StatisticCard/StatisticCard";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function StatisticList() {
    const { t } = useTranslation();
    const [statistics] = useState([
        {Icon: Store, title: "10.5k", subtitle: t("statistic-1")},
        {Icon: Dollar, title: "33k", subtitle: t("statistic-2")},
        {Icon: ShoppingBag, title: "45.5k", subtitle: t("statistic-3")},
        {Icon: MoneyBag, title: "25k", subtitle: t("statistic-4")},
    ])
    
    return (
        <div className={classes["statistic-list"]}>
            {statistics.map(({Icon, title, subtitle}, key) => 
                <StatisticCard
                    key={key}
                    Icon={Icon}
                    title={title}
                    subtitle={subtitle}
                />
            )}
        </div>
    )
}