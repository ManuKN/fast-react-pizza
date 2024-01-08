import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalcartPrice, getTotalcartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQunatity = useSelector(getTotalcartQuantity)
  const totalcartPrice = useSelector(getTotalcartPrice)
if(!totalCartQunatity) return null
  return (
    <div className="bg-stone-800 text-stone-200 px-4 py-4 uppercase sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 space-x-4 font-semibold sm:space-x-6 ">
        <span>{totalCartQunatity} pizzas</span>
        <span>{formatCurrency(totalcartPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
