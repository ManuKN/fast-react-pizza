import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UserName from "../features/User/username"
function Header() {
  return (
    <div className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-500 sm:px-6 flex items-center justify-between">
    <Link to='/' className="font-semibold tracking-widest">Fast React Pizza Co.</Link>
    <SearchOrder />
    <UserName />
    </div>
  )
}

export default Header