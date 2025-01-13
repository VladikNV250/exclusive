import InputSearch from "@/UI/inputs/InputSearch/InputSearch";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router";

export default function NavbarSearch() {   
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        const { key } = e;
        if (key === "Enter" && value !== "") 
            navigate(`/search/${value}`);
    }

    return (
        <InputSearch 
            defaultValue={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    )
}