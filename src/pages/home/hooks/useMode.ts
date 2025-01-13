import { ListMode } from "@/components/ProductList/types/types";
import { useState } from "react";

export default function useMode(initialValue: ListMode = 'slider') {
    const [mode, setMode] = useState<ListMode>(initialValue);

    const changeMode = () => { 
        if (mode === "all-products") setMode("slider");
        else setMode("all-products");
    }

    return {mode, changeMode};
}