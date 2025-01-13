import Modal from "@/UI/modals/Modal/Modal";
import classes from "./CommonLoader.module.scss";
import { createPortal } from "react-dom";

interface Props {
    loading: boolean,
}

export default function CommonLoader({loading}: Props) {
    if (loading) return createPortal(
        <Modal isOpen={true}>
            <h1 className={classes["loading"]}></h1>
        </Modal>,
        document.body 
    )
}