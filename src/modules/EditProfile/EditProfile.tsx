import { useTranslation } from "react-i18next";
import ProfileFormInput from "./components/ProfileFormInput/ProfileFormInput";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import SaveChanges from "./components/SaveChanges/SaveChanges";
import classes from "./EditProfile.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { IUser } from "@/models/IUser";
import { ChangeEvent, FormEvent, useState } from "react";
import Message from "@/components/Message/Message";
import { validatePassword } from "./helpers/validatePassword";
import { editUser, fetchUserByEmail } from "@/store/reducers/ActionCreators";
import CommonLoader from "@/UI/loaders/CommonLoader/CommonLoader";

interface Props {
    user: IUser | null;
}

type MessageType = {
    text: string,
    isOpen: boolean,
    type: "error" | "success" | "info",
}

export function EditProfile({user}: Props) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {isLoading, error} = useAppSelector(state => state.userReducer);
    const [message, setMessage] = useState<MessageType>({text: "", isOpen: false, type: "error"})
    const [formData, setFormData] = useState({
        firstName: user?.firstName ?? "",
        lastName: user?.lastName ?? "",
        email: user?.email ?? "",
        address: user?.address ?? "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    })

    const showMessage = (text: string, type: MessageType["type"] = "error"): void => {
        setMessage({text, isOpen: true, type});
        setTimeout(() => {
            setMessage({text, isOpen: false, type});
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
        const form = e.target as HTMLFormElement;

        const {
            firstName,
            lastName,
            email,
            address,
            currentPassword,
            newPassword,
            confirmPassword,
        } = formData;



        const newUser: IUser = {
            id: user?.id,
            firstName: firstName ?? user?.firstName ?? "",
            lastName,
            email: email ?? user?.email ?? "",
            address,
            password: user?.password ?? "",   
            reviews: user?.reviews ?? [],        
        }

        if (currentPassword) {
            if (user?.password !== currentPassword) return showMessage(t("password-dont-match-with-yours"));
            if (newPassword !== confirmPassword) return showMessage(t("new-password-dont-match"));
            if (!validatePassword(newPassword)) return showMessage(t("wrong-password"));
            if (newPassword) newUser.password = newPassword;
        }

        try {
            if (email && email !== user?.email) {
                const userExist = await dispatch(fetchUserByEmail(email)).unwrap();
                if (userExist) return showMessage(t("user-exist"));
            }
            await dispatch(editUser(newUser));
            showMessage(t("changes-saved"), "info");
            form.reset();
            setFormData({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                address: newUser.address,
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            })
        } catch (e) {
            showMessage("Something went wrong");
            console.error(e, error);
        }
    }

    return (
        <div className={classes["form-container"]}>
            <CommonLoader loading={isLoading} />
            <Message isOpen={message.isOpen} typeOfMessage={message.type}>
                {message.text}
            </Message>
            <ProfileHeader>
                {t("edit-profile")}
            </ProfileHeader>
            <form className={classes["form"]} onSubmit={handleForm}>
                <div className={classes["inputs-container__grid"]}>
                    <ProfileFormInput 
                        onChange={handleChange}
                        label={t("label-first-name")}
                        name="firstName"
                        placeholder={user?.firstName ?? ""}
                    />
                    <ProfileFormInput 
                        onChange={handleChange}
                        label={t("label-last-name")}
                        name="lastName"
                        placeholder={user?.lastName ?? t("placeholder-last-name")}
                    />
                </div>
                <div className={classes["inputs-container__grid"]}>
                    <ProfileFormInput 
                        onChange={handleChange}
                        label={t("label-email")}
                        name="email"
                        type="email"
                        placeholder={user?.email ?? ""}
                    />                
                    <ProfileFormInput 
                        onChange={handleChange}
                        label={t("label-address")}
                        name="address"
                        placeholder={user?.address ?? t("placeholder-address")}
                    />
                </div>
                <div className={classes["inputs-container__flex"]}>
                    <ProfileFormInput 
                        onChange={handleChange}
                        label={t("label-password")} 
                        name="currentPassword" 
                        type="password" 
                        placeholder={t("placeholder-current-password")}
                    />
                    <ProfileFormInput 
                        onChange={handleChange}
                        name="newPassword" 
                        type="password" 
                        placeholder={t("placeholder-new-password")}
                    />
                    <ProfileFormInput 
                        onChange={handleChange}
                        name="confirmPassword" 
                        type="password" 
                        placeholder={t("placeholder-confirm-password")}
                    />
                </div>
                <SaveChanges />
            </form>
        </div>
        
    )
}