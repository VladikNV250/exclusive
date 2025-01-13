import { Suspense } from "react";
import { Route, Routes } from "react-router";
import PageLoader from "@/UI/loaders/PageLoader/PageLoader";
import { About } from "@/pages/about";
import { Account } from "@/pages/account";
import { Cart } from "@/pages/cart";
import { CheckOut } from "@/pages/checkout";
import { Contact } from "@/pages/contact";
import { Home } from "@/pages/home";
import { LogIn } from "@/pages/log-in";
import { NotFound } from "@/pages/not-found";
import { Product } from "@/pages/product";
import { Search } from "@/pages/search";
import { SignUp } from "@/pages/sign-up";
import { Wishlist } from "@/pages/wishlist";

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/account" element={<Account />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/product/:productID" element={<Product />} />
                <Route path="/search/:query" element={<Search />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default AppRouter;