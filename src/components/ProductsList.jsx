import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";


const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const amount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 object-cover rounded-lg sm:h-32 sm:w-32 group-hover:scale-102 transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="text-lg font-medium capitalize">{title}</h3>
              <h4 className="text-md text-neutral-content capitalize">{company}</h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">{amount}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
