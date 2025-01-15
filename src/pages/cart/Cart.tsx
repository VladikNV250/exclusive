import Roadmap from "@/modules/Roadmap/Roadmap";
import CartContent from "./components/CartContent/CartContent";
import { TableCart } from "./components/TableCart";
import { routeSlice } from "@/store/reducers/RouteSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useTranslation } from "react-i18next";

export default function Cart() {
    const { t } = useTranslation();
    const {products} = useAppSelector(state => state.cartReducer);

    const dispatch = useAppDispatch();
    const {addRoute} = routeSlice.actions;
    dispatch(addRoute([{
        name: t("cart"), link: "/cart", level: 1,
    }]))

    return (
        <main>
            <Roadmap />
            <TableCart products={products} />
            <CartContent products={products} />
        </main>
    )
}