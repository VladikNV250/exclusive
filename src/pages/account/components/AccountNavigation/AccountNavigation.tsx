import { Link } from "react-router-dom";
import classes from "./AccountNavigation.module.scss";
import { Tabs } from "../../types/types";

interface Props {
    accountTabs: Tabs[],
    currentTab: string,
    onClick: (tab: string) => void
}

export default function AccountNavigation({accountTabs, currentTab, onClick}: Props) {
    return (
        <nav className={classes["navigation"]}>
            {accountTabs.map(({tabName, url, subTabs}, index) => 
                <div key={index} className={classes["tab"]}>
                    {url 
                    ?
                    <Link to={url} className={classes["tab-name"]}>
                        {tabName}
                    </Link>
                    :
                    <h6 className={classes["tab-name"]}>
                        {tabName}
                    </h6>
                    }
                    {subTabs &&
                    <div className={classes["subtab-container"]}>
                        {subTabs.map((subTab, index) => {
                            const tabClass = subTab === currentTab 
                            ? classes["subtab-name__current"] 
                            : classes["subtab-name"]; 
                            return (
                                <p 
                                    key={index} 
                                    className={tabClass} 
                                    onClick={() => onClick(subTab)}
                                >
                                    {subTab}
                                </p>
                            )
                        })}
                    </div>
                    }
                </div>
            )}
        </nav>
    )
}