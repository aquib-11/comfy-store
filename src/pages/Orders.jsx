import { redirect, useLoaderData } from "react-router-dom"
import { toast } from "react-toastify"
import { CustomFetch } from "../utils"
import { OrdersList, ComplexPagination, SectionTitle } from "../components";


 export const loader = (store)=> async ({request})=>{
    const user = store.getState().userState.user;
if (!user) {
  toast.warn("you must be logged in to view orders");
  return redirect("/login");
}
const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
try {
  const resp = await CustomFetch.get("/orders",
  {params,headers:{
    Authorization: `Bearer ${user.token}`
  }})
  console.log(resp)
  return {orders : resp.data.data, meta :resp.data.meta}
} catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.error?.message ||
      "there was an error ";

    toast.error(errorMessage);
    if(error.response.status === 401 || 403) return redirect("/login")
    return null;
  }
  
 }
const Orders = () => {
  const {meta} = useLoaderData()
  if(meta.pagination.total < 1){
    return <SectionTitle text="please make an order"/>
  }
  return (
    <>
      <SectionTitle text="your orders" />
      <OrdersList />
      <ComplexPagination />
    </>
  );
}
export default Orders