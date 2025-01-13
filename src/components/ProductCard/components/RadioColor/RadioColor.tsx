import { CSSProperties } from "react";
import classes from "./RadioColor.module.scss";

interface Props {
    colors: string[];
    name: string;
    onChange?: (color: string) => void;
    isLoading?: boolean;
}

export function RadioColor({colors, name, onChange, isLoading = false}: Props) {
    const selectedColor = colors[0]
    const loadingMask: CSSProperties = {
        background: "#aaa",
        width: "50px",
        height: "20px",
        padding: "0",
    }

    return (
        isLoading ? <div style={loadingMask} /> :
        <div className={classes["radio-container"]} >
            {colors.length > 1 ?
            colors.map((color, index) => (
                <input 
                    key={index}
                    type="radio" 
                    className={classes["color-radio"]}
                    style={{background: color}}
                    name={name + "-radioColors"}
                    value={color}
                    defaultChecked={color === selectedColor}
                    onClick={() => onChange(index !== 0 ? color : "default")}
                />
            )) : null}
        </div>
    )
}