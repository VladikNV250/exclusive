import { useState } from "react";
import { Tabs } from "../types/types";

type ReturnedType = [
    Tabs[], 
    string, 
    (tab: string) => void
]

export default function useTabs(tabs: Tabs[]): ReturnedType {
    const firstSubTab = tabs[0].subTabs[0];
    const [currentTab, setCurrentTab] = useState(firstSubTab);

    const changeTab = (tab: string) => {
        setCurrentTab(tab);
    }

    return [tabs, currentTab, changeTab];
}