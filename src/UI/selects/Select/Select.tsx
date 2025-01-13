import { Dispatch, SetStateAction, useState } from "react";
import classes from "./Select.module.scss";
import Chevron from "@/assets/icons/drop-down.svg?react";

interface Props {
    options: {
        value: string,
        name: string,
    }[]
    selectedOption?: {
        value: string,
        name: string,
    };
    setSelectedOption: Dispatch<SetStateAction<{
        value: string;
        name: string;
    }>>;
    placeholder?: string;
}

export default function Select({options, placeholder, selectedOption = options[0], setSelectedOption}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    function handleOptionClick(option: {name: string, value: string}) {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className={classes["select-container"]}>
            <div className={classes["select"]} onClick={() => setIsOpen(!isOpen)}>
                <div className={classes["select-trigger"]}>
                    {selectedOption ? selectedOption.name : placeholder}
                    <Chevron width={24} height={24} />
                </div>
                {isOpen && (
                    <div className={classes["select-options"]}>
                        {options.map((option, index) => (
                            <div 
                                key={index}
                                className={classes["select-option"]}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option.name}    
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}