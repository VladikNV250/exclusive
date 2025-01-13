import classes from "./Roadmap.module.scss";
import React from "react";
import IRoute from "@/models/IRoute";
// import { useAppSelector } from "@/hooks/redux";
import RoadmapItem from "./components/RoadmapItem/RoadmapItem";

interface Props {
    children?: React.ReactNode;
}

export default function Roadmap({children}: Props) {
    // const {routes} = useAppSelector(state => state.routeReducer);

    return (
        <div className={classes["roadmap"]}>
            <div className={classes["roadmap-container"]}>
                <div>
                    {/* {routes.map(({name, link, level}) =>  
                        <RoadmapItem 
                            key={level}
                            isLast={level === routes.length - 1}
                            name={name}
                            link={link}
                        />
                    )} */}
                </div>
                {children}
            </div>
        </div>
    )
}