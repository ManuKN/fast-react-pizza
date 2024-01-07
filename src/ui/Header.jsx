import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UserName from "../features/User/username"
function Header() {
  return (
    <div className="bg-yellow-400 uppercase px-4 py-3 border-b border-stone-500 sm:px-6 flex items-center justify-between font-pizza">
    <Link to='/' className="font-semibold tracking-widest font-pizza">Fast React Pizza Co.</Link>
    <SearchOrder />
    <UserName />
    </div>
  )
}

export default Header