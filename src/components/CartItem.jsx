import { useDispatch } from "react-redux"
import { removeitem, updateItem } from "../features/cart/CartSlice"
import { formatPrice, generateAmountoptions } from "../utils"

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const { cartID, image, amount, company, productColor,title, price} = cartItem;

    const removeItemFromCart = () => {
      dispatch(removeitem({cartID}));
    };
    const handleAmount = (e)=>{
        const value = parseInt(e.target.value)
   dispatch(updateItem({ cartID, amount:value }));
    }
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32  object-cover"
      />
      <div className="sm:ml-16">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="capitalize mt-2 text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          colr :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24">
        <div className="form-control max-w-sm">
            <label htmlFor="amount" className="label p-0">Amount</label>
            <select id="amount"
             className="mt-2 select select-base select-bordered select-sm"
              value={amount}
              onChange={handleAmount}>
                {
                    generateAmountoptions(amount + 5)
                }
            </select>
        </div>
        <button className="mt-2 link link-primary link-hover text-sm"
        onClick={removeItemFromCart} >
            remove</button>
      </div>
      <p className="sm:ml-auto font-medium">{formatPrice(price)}</p>
    </article>
  );
}
export default CartItem