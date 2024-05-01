import { useSelector } from "react-redux"
import CartItemList from "../components/CartItemList"
import { CartTotal, SectionTitle } from "../components"
import { Link } from "react-router-dom"

const Cart = () => {
  const { user } = useSelector((state) => state.userState);
  const {numItemInCart} = useSelector((state)=>state.cartState)
  if(numItemInCart === 0 )return <SectionTitle text="no item in cart"/>
  return (
    <div>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user? <Link to="/checkout" className="btn btn-primary btn-block mt-8 capitalize" >proceed to checkout</Link>:
          <Link to="/login" className="btn btn-primary btn-block mt-8 capitalize">please login</Link>}
        </div>
      </div>
    </div>
  );
}
export default Cart