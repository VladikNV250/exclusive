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
                <Route index element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
                <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
                <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
                <Route path="/wishlist" element={<Suspense fallback={<PageLoader />}><Wishlist /></Suspense>} />
                <Route path="/cart" element={<Suspense fallback={<PageLoader />}><Cart /></Suspense>} />
                <Route path="/sign-up" element={<Suspense fallback={<PageLoader />}><SignUp /></Suspense>} />
                <Route path="/log-in" element={<Suspense fallback={<PageLoader />}><LogIn /></Suspense>} />
                <Route path="/account" element={<Suspense fallback={<PageLoader />}><Account /></Suspense>} />
                <Route path="/checkout" element={<Suspense fallback={<PageLoader />}><CheckOut /></Suspense>} />
                <Route path="/product/:productID" element={<Suspense fallback={<PageLoader />}><Product /></Suspense>} />
                <Route path="/search/:query" element={<Suspense fallback={<PageLoader />}><Search /></Suspense>} />
                <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
            </Routes>
        </Suspense>
    )
}

export default AppRouter;