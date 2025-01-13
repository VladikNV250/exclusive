import ApplyCoupon from "./components/ApplyCoupon/ApplyCoupon";
import InputCoupon from "./components/InputCoupon/InputCoupon";
import classes from "./Coupon.module.scss";

export function Coupon() {
    return (
        <div className={classes["coupon-container"]}>
            <InputCoupon />
            <ApplyCoupon />
        </div>
    )
}