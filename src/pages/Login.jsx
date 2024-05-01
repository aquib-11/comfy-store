import { Form, Link, redirect, useNavigate } from "react-router-dom"
import { FormInput, SubmitBtn } from "../components"
import { CustomFetch } from "../utils"
import { toast } from "react-toastify"
import { loginUSer } from "../features/user/userSlice"
import { useDispatch } from "react-redux"

export const action = (store)=> async ({request})=>{
const formData = await request.formData()
const data = Object.fromEntries(formData)
try {
  const resp = await CustomFetch.post("/auth/local", data)
  store.dispatch(loginUSer(resp.data))
  toast.success("logged in sucessfully")
  
  return redirect("/")
} catch (error) {
   toast.error(
     error?.response?.data?.error?.message ||
       "please double chechk your credentials"
   );
   return null
}}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const GuestUserLogin = async () => {
   try {
  const resp = await CustomFetch.post("/auth/local",
   {identifier:"test@test.com",password:"secret"});
   dispatch(loginUSer(resp.data))
     toast.success("welcome guest user");
     return navigate("/")

   } catch (error) {
     toast.error("guest user login error, try again later");
     return null;
   }
  }
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          onClick={GuestUserLogin}
          className="btn btn-secondary "
        >
          Guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}
export default Login