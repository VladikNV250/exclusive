import classes from "./SignUp.module.scss";
import { UserAuth } from "@/modules/UserAuth/UserAuth";

export default function SignUp() {
    return (
        <main className={classes["sign-up"]}>
            <UserAuth type="sign-up" />
        </main>
    )
}