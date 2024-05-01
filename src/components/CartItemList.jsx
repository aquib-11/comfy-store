import { useSelector } from "react-redux"
import CartItem from "./CartItem";

const CartItemList = () => {
    const { cartItems } = useSelector((state) => state.cartState);
  return (
    <>
        {cartItems.map((item)=>{
            return <CartItem key={item.cartID} cartItem={item}></CartItem>
        })}
    </>
  )
}
export default CartItemList