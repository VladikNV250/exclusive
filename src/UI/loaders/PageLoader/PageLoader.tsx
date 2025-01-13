import Modal from "@/UI/modals/Modal/Modal";
import classes from "./PageLoader.module.scss";

export default function PageLoader() {
    
    return (
        <>
            <div className={classes["loading-content"]} />
            <Modal isOpen={true}>
                <h1 className={classes["loading"]}></h1>
            </Modal>        
        </>
    )
}