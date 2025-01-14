import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useScroll() {
    const { pathname } = useLocation();

    useEffect(() => { // Scrolls to the top of the page when a new page is navigated to
        window.scrollTo(0, 0); 
    }, [pathname]);
}