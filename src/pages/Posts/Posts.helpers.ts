import { NavigateFunction } from "react-router";

export const buildTabs = (onNavigate: NavigateFunction ) => {
    
    const tabs = [
        {
            id: "VOTES",
            label: "Popular",
            onClick: () => onNavigate("/posts"),
        },
        {   
            id: "NEWEST",
            label: "Newest",
            onClick: () => onNavigate("/posts/newest"),
        }
    ];

    return tabs
}