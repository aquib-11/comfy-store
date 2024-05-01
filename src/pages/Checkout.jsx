import { useSelector } from "react-redux"
import { CartTotal, CheckoutSubmit, SectionTitle } from "../components"
import { redirect } from "react-router-dom"
import { toast } from "react-toastify"
export const loader = (store)=>()=>{
  const user = store.getState().userState.user
  if(!user) {
    toast.warn("you must be logged in to checkout");
   return redirect("/login");
  }
 return null
}
const Checkout = () => {
  const {cartTotal} = useSelector((state)=>state.cartState)
  if(cartTotal === 0) return <SectionTitle text={"Your car is empty"}/>
  return (
    <>
      <SectionTitle text="palce your order" />
      <div className="mt-8 grid gap-8 sm:grid-cols-2 items-start">
        <CheckoutSubmit/>
        <CartTotal />
      </div>
    </>
  );
}
export default Checkout