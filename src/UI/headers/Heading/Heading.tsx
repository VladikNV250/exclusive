import { CSSProperties } from "react";
import classes from "./Heading.module.scss";
type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface Props {
  level?: Headings,
  children?: React.ReactNode,
  className?: string,
  isLoading?: boolean,
}

export default function Heading({level = "h1", children, className = "", isLoading = false}: Props) {
  const Tag: Headings = level;
  const loadingMask: CSSProperties = {
    color: "transparent",
    background: "#aaa",
    width: "fit-content",
    padding: "0",
  }

  return (
    <Tag 
      className={`${classes[level]} ${className}`}
      style={isLoading ? loadingMask : {}}
    >
        {children}
    </Tag>
  )
}
