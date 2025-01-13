import Heading from "@/UI/headers/Heading/Heading";
import classes from "./ProfileHeader.module.scss";

interface Props {
    children: React.ReactNode
}

export default function ProfileHeader({children}: Props) {
    return (
        <Heading level="h5" className={classes["header"]}>
            {children}
        </Heading>
    )
}