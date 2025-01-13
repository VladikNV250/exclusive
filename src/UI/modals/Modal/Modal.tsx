import classes from "./Modal.module.scss";

interface Props {
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
}

export default function Modal({isOpen, setIsOpen, children}: Props) {
  const modal = isOpen ? classes["modal-open"] : classes.modal;

  const handleClick = () => {
    if (setIsOpen) setIsOpen(false);
  }

  return (
    <div onClick={handleClick} className={modal}>
      {children}
    </div>
  )
}
