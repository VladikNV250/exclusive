import classes from "./CirclePagination.module.scss";

interface Props {
    totalItems: number,
    currentItem: number,
    onChange: (newItem: number) => void,
    colorStyle?: "black" | "white";
}

export default function CirclePagination({totalItems, onChange, currentItem, colorStyle = "white"}: Props) {
    return (
        <div className={classes["pagination-container"]}>
            {Array.from({length: totalItems}).map((_, index) => {
                const className = index + 1 === currentItem 
                ? classes[`pagination-item__current__${colorStyle}`] 
                : classes[`pagination-item__${colorStyle}`];
                return (
                    <div 
                        key={index}
                        className={className}
                        onClick={() => onChange(index + 1)} 
                    />
                )
            })}
        </div>
    )
}