import InputAuth from "@/UI/inputs/InputAuth/InputAuth";
import classes from "./LogIn.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import { useTranslation } from "react-i18next";
import { ChangeEvent, FormEvent, useState } from "react";
import Message from "@/components/Message/Message";
import { useNavigate } from "react-router";
// import { useAppDispatch, useAppSelector } from "@/hooks/redux";
// import { fetchUserByEmail } from "@/store/reducers/ActionCreators";
// import { userSlice } from "@/store/reducers/UserSlice";

export default function LogInForm() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    // const dispatch = useAppDispatch();
    // const {isLoading, error} = useAppSelector(state => state.userReducer);
    // const {setUser} = userSlice.actions;
    const [message, setMessage] = useState({text: "", isOpen: false});
    const [formData, setFormData] = useState({
        emailPhone: "",
        password: "",
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }))
    }

    const showMessage = (text: string) => {
        setMessage({text, isOpen: true});
        setTimeout(() => {
            setMessage({text, isOpen: false});
        }, 4000)
    }

    const handleForm = async (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const {emailPhone, password} = formData;

        // try {
        //     const user = await dispatch(fetchUserByEmail(emailPhone)).unwrap();
        //     if (user) {
        //         if (user.password === password) {
        //             dispatch(setUser(user));
        //             localStorage.setItem("user", user.id);
        //             navigate("/");
        //         } else {
        //             showMessage("wrong-password-or-email");
        //         }
        //     } else {
        //         showMessage("wrong-password-or-email");
        //     }
        // } catch (e) {
        //     showMessage("Something went wrong..");
        //     console.error(e, error);
        // }
    }

    return (
        <form className={classes["log-in"]} id="form-log-in" onSubmit={handleForm}>
            <Message isOpen={message.isOpen}>
                {message.text}
            </Message>
            <InputAuth 
                onChange={handleChange} 
                placeholder={t("placeholder-auth-email")} 
                name="emailPhone" 
            />
            <InputAuth 
                onChange={handleChange} 
                placeholder={t("placeholder-auth-password")} 
                name="password" 
                type="password" 
            />
            <div className={classes["log-in--container"]}>
                <ButtonLarge type="submit">
                    {t("log-in")}
                </ButtonLarge>
                <button className={classes["button--forget-password"]}>
                    {t("forget-password")}?
                </button>
            </div>
        </form>
    )
}