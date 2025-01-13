import classes from "./ServiceList.module.scss";
import ServiceCard from "@/components/ServiceList/UI/ServiceCard/ServiceCard";
import Delivery from "@/assets/icons/delivery.svg?react";
import Headphones from "@/assets/icons/headphone-two.svg?react";
import Protect from "@/assets/icons/secure-two.svg?react";
import { useTranslation } from "react-i18next";

export function ServiceList() {
    const { t } = useTranslation();
    const services = [
        {Icon: Delivery, title: t("service-item-1-title"), subtitle: t("service-item-1-subtitle")},
        {Icon: Headphones, title: t("service-item-2-title"), subtitle: t("service-item-2-subtitle")},
        {Icon: Protect, title: t("service-item-3-title"), subtitle: t("service-item-3-subtitle")},
    ]
    
    return (
        <div className={classes["service-container"]}>
            {services.map(({Icon, title, subtitle}, index) => 
                <ServiceCard
                    key={index}
                    Icon={Icon}
                    title={title}
                    subtitle={subtitle}
                />
            )}
        </div>
    )
}