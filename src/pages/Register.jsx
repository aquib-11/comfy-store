import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { CustomFetch } from "../utils";
import { toast } from "react-toastify";

export const action =async({request})=>{
const formData = await request.formData()
const data = Object.fromEntries(formData)
try {
  const resp = await CustomFetch.post("/auth/local/register", data)
  toast.success("registered sucessfully")
  return redirect("/login")
} catch (error) {
   toast.error(
     error?.response?.data?.error?.message ||
       "please double chechk your credentials"
   );
   return null
}
}

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput
          type="email"
          label="email"
          name="email"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
       />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
