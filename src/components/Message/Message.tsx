import { createPortal } from "react-dom";
import classes from "./Message.module.scss";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  typeOfMessage?: "error" | "success" | "info";
}

export default function Message({isOpen, children, typeOfMessage = "info"}: Props) {
  
  if (isOpen) return createPortal(
      <div className={classes[`message-${typeOfMessage}`]}>
          {children}
      </div>,
      document.body
  );
}