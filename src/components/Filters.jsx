import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import FormRange from "./FormRange"
import FormCheckbox from "./FormCheckbox"


const Filters = () => {
    const {meta, params}= useLoaderData()
    const {search , company,category, shipping , order, price} =params
    //  const handleReset = () => {
    //    // Reload the page
    //    window.location.reload();
    //  };
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search products"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={price}
      />
      <FormCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className=" btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
      {/* <button onClick={handleReset} className="btn btn-accent btn-sm">
      </button> */}
    </Form>
  );
}
export default Filters