import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
const ProductsContainer = () => {
    const {meta} = useLoaderData()
    const totalProducts = meta.pagination.total;

    const [productLayout, SetProductLayout] = useState("grid")

   const setActiveStyles = (pattern) => {
     return `text-xl btn btn-circle btn-sm ${
       pattern === productLayout
         ? "btn-primary text-primary-content"
         : "btn-ghost text-base-content"
     }`;
   };
  return (
    <>
      {/* header */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="text-md font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => SetProductLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => SetProductLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : productLayout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}
export default ProductsContainer