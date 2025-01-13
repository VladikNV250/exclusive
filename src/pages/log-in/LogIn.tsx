import classes from "./LogIn.module.scss";
import { UserAuth } from "@/modules/UserAuth/UserAuth";


export default function LogIn() {
    return (
        <main className={classes["log-in"]}>
            <UserAuth type="log-in" />
        </main>
    )
}