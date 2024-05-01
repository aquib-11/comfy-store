import axios from "axios";

 const baseUrl = "https://strapi-store-server.onrender.com/api"

 export const CustomFetch = axios.create({
    baseURL: baseUrl,
 })

 export const formatPrice = (price) =>{
   const dollarAmount = new Intl.NumberFormat("en-us",{
      style:"currency",
      currency:"USD",
   }).format((price/100).toFixed(2))
   return dollarAmount
 }
 
 export const  generateAmountoptions = (number)=>{
   return Array.from({length:number}, (value, index)=>{
      const amount = index + 1
      return <option value={amount}>{amount}</option>
   })
 }