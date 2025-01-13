import classes from "./AccountMenu.module.scss";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


import User from "@/assets/icons/user.svg?react";
import MallBag from "@/assets/icons/mallbag.svg?react";
import CancellationIcon from "@/assets/icons/cancel-one.svg?react";
import Star from "@/assets/icons/reviews.svg?react";
import LogoutIcon from "@/assets/icons/logout.svg?react";
import { Link, useLocation, useNavigate } from "react-router";
// import { useAppDispatch } from "@/hooks/redux";
// import { userSlice } from "@/store/reducers/UserSlice";

export default function AccountMenu() {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    // const dispatch = useAppDispatch();
    // const {logoutUser} = userSlice.actions;
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const links = [
        {Icon: User, url: "/account", name: t("manage-account")},
        {Icon: MallBag, url: "/account", name: t("my-orders")},
        {Icon: CancellationIcon, url: "/account", name: t("my-cancellations")},
        {Icon: Star, url: "/account", name: t("my-reviews")},
    ]

    const handleClick = () => {
        // dispatch(logoutUser());
        navigate("/");
    }

    useEffect(() => {
        setIsOpenMenu(false);
    }, [pathname]);

    return (
        <div className={classes['account-menu']}>
            <button
                className={classes[isOpenMenu ? "account-button__opened" : "account-button"]}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
                <User width={32} height={32} className={classes["account-icon"]} />
            </button>
            {isOpenMenu &&
            <ul className={classes["account-dropdown"]} onClick={() => setIsOpenMenu(false)}>
                {links.map(({Icon, url, name}, index) => 
                    <li key={index}>
                        <Link to={url} className={classes["account-item"]}>
                            <Icon width={32} height={32} className={classes["account-icon"]} />
                            <p className={classes["account-text"]}>
                                {name}
                            </p>
                        </Link>
                    </li>
                )}
                <li>
                    <button className={classes["account-item"]} onClick={handleClick}>
                        <LogoutIcon width={32} height={32} className={classes["account-icon"]} />
                        <p className={classes["account-text"]}>
                            {t("logout")}
                        </p>
                    </button>
                </li>
            </ul>}
        </div>
        
    )
}