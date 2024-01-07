// Test ID: IIDSAT
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem"


function Order() {
  const order = useLoaderData()
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-2 space-y-8">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div>
          {priority && <span className=" ml-2 text-sm text-red-50 bg-red-500 rounded-full font-semibold py-2 px-3 uppercase">Priority</span>}
          <span className="text-sm uppercase text-red-50 bg-green-500 rounded-full font-semibold py-2 px-3">{status} order</span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-300 px-6 py-5">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
     <ul className="border-t border-b border-stone-400 divide-y divide-stone-400">
      {cart.map((item)=>(<OrderItem item={item} key={item.id}/>))}
     </ul>
      <div className="px-6 py-5 bg-stone-300 space-y-2">
        <p className="text-sm font-semibold text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-semibold text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({params}){
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
