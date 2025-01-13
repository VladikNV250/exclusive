import classes from "./TableCart.module.scss";
import TableRowCart from "@/pages/cart/components/TableCart/components/TableRowCart/TableRowCart";
import TableHeadCart from "@/pages/cart/components/TableCart/components/TableHeadCart/TableHeadCart";
import ToShop from "./components/ToShop/ToShop";
import CleanCartButton from "./components/CleanCartButton/CleanCartButton";
import { useTranslation } from "react-i18next";
import { IProduct } from "@/models/IProduct";

interface Props {
    products: IProduct[];
}

export function TableCart({products}: Props) {
    const { t } = useTranslation();
    const headers = [t("product"), t("price"), t("quantity"), t("subtotal")];
    const isCartEmpty = products.length === 0;

    return (
        <section className={classes["table-section"]}>
            <div className={classes["table-container"]}>
                <table className={classes["table"]}>
                    {!isCartEmpty && <TableHeadCart headers={headers} />}
                    <tbody>
                    {!isCartEmpty ? products.map((product) => 
                        <TableRowCart product={product} key={product.id} />
                    ) : 
                    <tr>
                        <th>
                            {t("cart-empty")}  
                        </th>
                    </tr>}
                    </tbody>
                </table>
                <div className={classes["buttons-container"]}>
                    <ToShop />
                    {!isCartEmpty && <CleanCartButton />}
                </div>
            </div>

        </section>
    )
}