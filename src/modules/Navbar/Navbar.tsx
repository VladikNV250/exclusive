import Logo from "@/UI/headers/Logo/Logo";
import classes from "./Navbar.module.scss";
import Heart from "@/assets/icons/heart-small.svg?react";
import Cart from "@/assets/icons/cart.svg?react";
import ButtonBurger from "@/UI/buttons/ButtonBurger/ButtonBurger";
import LinkUnderlined from "@/UI/links/LinkUnderlined/LinkUnderlined";
import TopHeader from "./components/TopHeader/TopHeader";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks/redux";
import AccountMenu from "./components/AccountMenu/AccountMenu";
import NavbarSearch from "./components/NavbarSearch/NavbarSearch";
import { Link } from "react-router";

export function Navbar() {
    const { t } = useTranslation();
    const { products: wishlistProducts } = useAppSelector(state => state.wishlistReducer);
    const { products: cartProducts } = useAppSelector(state => state.cartReducer);
    const { isAuthorized } = useAppSelector(state => state.userReducer);
    const links = [
        {name: t("home"), url: "/"},
        {name: t("contact"), url: "/contact"},
        {name: t("about"), url: "/about"},
    ]
    
    return (
        <>
            <TopHeader />
            <nav className={classes.navbar}>
                <div className={classes["navbar-container"]}>
                    <ButtonBurger isOpen={false} />
                    <Logo>
                        Exclusive
                    </Logo>
                    <div className={classes["links-container"]}>
                        {links.map(({name, url}, index) => {
                        return (
                        <LinkUnderlined 
                            to={url} 
                            key={index} 
                        >
                            {name}
                        </LinkUnderlined>
                        )
                        })}
                        {!isAuthorized && 
                        <LinkUnderlined to="/sign-up">
                            {t("sign-up")}
                        </LinkUnderlined>}
                    </div>
                    <div className={classes["navbar-content"]}>
                        <NavbarSearch />
                        <Link 
                            to={"/wishlist"} 
                            className={classes["icon-link__heart"]}
                        >
                            {wishlistProducts.length > 0 &&
                            <div className={classes["counter"]}>
                                {wishlistProducts.length}
                            </div>}
                            <Heart width={32} height={32} />
                        </Link>
                        <Link 
                            to={"/cart"} 
                            className={classes["icon-link__cart"]}
                        >
                            {cartProducts.length > 0 &&
                            <div className={classes["counter"]}>
                                {cartProducts.length}
                            </div>}
                            <Cart width={32} height={32} />
                        </Link>
                        {isAuthorized && <AccountMenu />}
                    </div>
                </div>
            </nav>
        </>
        
    )
}
