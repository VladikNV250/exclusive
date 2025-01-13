import Roadmap from "@/modules/Roadmap/Roadmap";
import classes from "./Account.module.scss";
import { EditProfile } from "@/modules/EditProfile";
import Greeting from "./components/Greeting/Greeting";
import AccountNavigation from "./components/AccountNavigation/AccountNavigation";
import useTabs from "./hooks/useTabs";
import { routeSlice } from "@/store/reducers/RouteSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useTranslation } from "react-i18next";

export default function Account() {
    const { t } = useTranslation();
    const {user} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    const {addRoute} = routeSlice.actions;
    dispatch(addRoute([{
        name: t("my-account"), link: "/account", level: 1,
    }]))
    const [accountTabs, currentTab, changeTab] = useTabs([
        {
            tabName: t("manage-account"),
            subTabs: [t("my-profile"), t("address-book"), t("payment-options")],
        },
        {
            tabName: t("my-orders"),
            subTabs: [t("my-returns"), t("my-cancellations")],
        },
        {
            tabName: t("my-wishlist"),
            url: "/wishlist",
        }
    ]);
    
    return (
        <main className={classes["account"]}>
            <Roadmap>
                <Greeting 
                    firstName={user?.firstName || ""} 
                    lastName={user?.lastName || ""} 
                />
            </Roadmap>
            <section className={classes["account-section"]}>
                <div className={classes["account-container"]}>
                    <AccountNavigation 
                        accountTabs={accountTabs}
                        currentTab={currentTab}
                        onClick={changeTab}
                    />
                    <EditProfile user={user} />
                </div>
            </section>
        </main>
    )
}