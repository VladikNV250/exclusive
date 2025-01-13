import InputAuth from "@/UI/inputs/InputAuth/InputAuth";
import classes from "./SignUpForm.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import ButtonGoogle from "@/UI/buttons/ButtonGoogle/ButtonGoogle";
import { useTranslation } from "react-i18next";
import { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "@/models/IUser";
import Message from "@/components/Message/Message";
import { validateEmailPhone } from "../../helpers/validateEmailPhone";
import { validatePassword } from "../../helpers/validatePassword";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { createUser, fetchUserByEmail } from "@/store/reducers/ActionCreators";

export default function SignUpForm() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state => state.userReducer);
    const [message, setMessage] = useState({isOpen: false, text: ""});
    const [formData, setFormData] = useState({
        name: "",
        emailPhone: "",
        password: "",
    })

    const showMessage = (text: string) => {
        setMessage({text, isOpen: true});
        setTimeout(() => {
            setMessage({text, isOpen: false});
        }, 4000)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    }

    const handleForm = async (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const {name, emailPhone, password} = formData;

        if (!validateEmailPhone(emailPhone)) {
            showMessage(t("wrong-email-or-phone"));
            return;
        } else if (!validatePassword(password)) {
            showMessage(t("wrong-password"));
            return;
        }

        try {
            const user = await dispatch(fetchUserByEmail(emailPhone)).unwrap();
            if (user) {
                showMessage(t("user-exist"));
                return;
            } else {
                const firstName = name.split(" ")[0];
                const lastName = name.split(" ")[1];
                const newUser: IUser = {
                    firstName,
                    lastName,
                    email: emailPhone,
                    address: "",
                    password,
                    reviews: [],
                }
        
                await dispatch(createUser(newUser));
                navigate("/")   
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <form className={classes["sign-up"]} id="sign-up" onSubmit={handleForm}>
            <Message 
                isOpen={message.isOpen} 
                typeOfMessage="success"
            >
                {message.text}    
            </Message>
            <InputAuth 
                required 
                onChange={handleChange} 
                placeholder={t("placeholder-auth-name")} 
                name="name" 
            />
            <InputAuth 
                required 
                onChange={handleChange} 
                placeholder={t("placeholder-auth-email")} 
                name="emailPhone" 
            />
            <InputAuth 
                required 
                onChange={handleChange} 
                placeholder={t("placeholder-auth-password")} 
                name="password" 
                type="password" 
            />
            <div className={classes["buttons-container"]}>
                <div className={classes["button-wrapper"]}>
                    <ButtonLarge type="submit" disabled={isLoading}>
                        {t("create-account")}
                    </ButtonLarge>
                </div>
                <ButtonGoogle />
            </div>
        </form>
    )
}