import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { clearCart } from "../features/cart/CartSlice";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
    const { user } = useSelector((state) => state.userState);
   const handleLogout=()=>{
    navigate("/")
    dispatch(clearCart())
    dispatch(logoutUser())
   }
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {
          user ? <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button onClick={handleLogout} className="btn btn-xs btn-outline btn-primary">logout</button>
          </div>:
        
        <div className="flex gap-x-6 justify-center items-center">
          <Link
            to="/login"
            className="flex gap-x-6 justify-center items-center"
          >
            Sign in / Guest
          </Link>
          <Link
            to="/register"
            className="flex gap-x-6 justify-center items-center"
          >
            Create Account
          </Link>
        </div>
}
      </div>
    </header>
  );
}
export default Header