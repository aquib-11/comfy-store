import { Filters, PaginationContainer, ProductsContainer } from "../components"
import { CustomFetch } from "../utils";

export const loader = async({request})=>{
  // const params = new URL(request.url).searchParams
  // const search =params.get("search")
  const params = Object.fromEntries(
    [... new URL(request.url).searchParams.entries()])
  const response = await CustomFetch("/products", {params})
  const products = response.data.data
  const meta = response.data.meta
  return {products, meta ,params}
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
export default Products