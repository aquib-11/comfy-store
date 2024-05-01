import { Link, useLoaderData } from "react-router-dom"
import { CustomFetch, formatPrice, generateAmountoptions } from "../utils"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../features/cart/CartSlice"

export const loader = async ({params}) => {
  const resp = await CustomFetch(`/products/${params.id}`)
  return { Product: resp.data.data };
}

const Product = () => {
  const { Product } = useLoaderData();
  const {image, title, price, description, colors, company} = Product.attributes
  const dolloramount = formatPrice(price)

  const [productColor, SetProductColor] = useState(colors[0])
  const [amount , setAmount]= useState(1)

  const handleAmount = (e) =>{
    setAmount(parseInt(e.target.value));
  }
  const cartProduct={
    cartID: Product.id +productColor,
    productID:Product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount
  }
  const dispatch = useDispatch()
 
  const addToCart = ()=>{
    dispatch(addItem({product:cartProduct}))
  }
    return (
      <section>
        <div className="breadcrumbs text-md">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
          </ul>
        </div>
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          <img
            src={image}
            alt={title}
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
          <div>
            <h1 className="text-3xl font-bold capitalize">{title}</h1>
            <h4 className="text-xl text-neutral-content font-bold mt-2">
              {company}
            </h4>
            <p className="mt-3 text-xl">{dolloramount}</p>
            <p className="mt-6 leading-8">{description}</p>
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                colors
              </h4>
              <div className="mt-2">
                {colors.map((color) => {
                  return (
                    <button
                      key={color}
                      type="button"
                      className={`badge w-6 h-6 mr-2 ${
                        color === productColor && "border-2 border-secondary"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        SetProductColor(color);
                      }}
                    ></button>
                  );
                })}
              </div>
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="amount" className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                id="amount"
                className="select select-secondary select-bordered select-md"
                value={amount}
                onChange={handleAmount}
              >
                {generateAmountoptions(10)}
              </select>
            </div>
            <div className="mt-10">
              <button onClick={addToCart} className="btn btn-secondary btn-md">Add to bag</button>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Product