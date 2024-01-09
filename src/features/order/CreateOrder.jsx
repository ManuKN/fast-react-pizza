//import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { createOrder } from "../../services/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalcartPrice } from "../cart/cartSlice";
import store from '../../store'
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress } from "../User/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  //const cart = fakeCart;
  const cart = useSelector(getCart)
  const dispatch = useDispatch()
  const {username  , status : addressStatus , position , address , error : errorAddress} =useSelector(state => state.user)
  const navigation = useNavigation()
  const formError = useActionData()
  const isSubmitting = navigation.state === "submitting"
  const totalcartPrice = useSelector(getTotalcartPrice)
  const priorityPrice = withPriority ? totalcartPrice * 0.2 : 0
  const totalPrice = totalcartPrice + priorityPrice
  const isLoadingAddress = addressStatus === 'loading'

  return (
    <div className="px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">Ready to order? Let's go!</h2>
      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="flex gap-x-12 px-2 py-2 flex-col sm:flex sm:flex-row sm:justify-between">
          <label className="sm:basis-40 text-lg font-semibold">First Name</label>
          <input className="input mb-2 w-full" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="flex gap-2 px-2 py-2 flex-col sm:flex sm:flex-row sm:justify-between">
          <label className="sm:basis-40 text-lg font-semibold">Phone number</label>
          <div className="grow">
            <input className="input mb-2 w-full " type="tel" name="phone" required />
            {formError?.phone && <p className="text-xs p-2 mt-2 bg-red-100 rounded-md text-red-700 ">{formError.phone}</p>}
          </div>
        </div>

        <div className="flex gap-2 px-2 py-2 flex-col sm:flex sm:flex-row sm:justify-between relative">
          <label className="sm:basis-40 text-lg font-semibold">Address</label>
          <div className="grow">
            <input className='input w-full mb-2'
            type="text" name="address" required disabled={isLoadingAddress} defaultValue={address}/>
             {addressStatus === 'error' && <p className="text-xs p-2 mt-2 bg-red-100 rounded-md text-red-700 ">{errorAddress}</p>}
          </div>
          <span className="absolute right-[10px] item-center font-semibold mt-[3px] ">
            {!position && !position &&
          <Button type="small" onClick={(e) => 
             {
              e.preventDefault()
            dispatch(fetchAddress())}}>Get Position</Button>}
          </span>
        </div>

        <div className="flex gap-5 mb-6 mt-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority" className="font-semibold">Want to yo give your order priority?</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <input type='hidden' name='position' value={position ? `${position.latitude} , ${position.longitude}`: ''}></input>
          {cart ?  <Button type='primary' disabled={isSubmitting || isLoadingAddress} >{isSubmitting? 'Placing Order...' :`'ORDER NOW FROM' ${formatCurrency(totalPrice)}`}</Button> :"Your cart Is Empty🥺.Please select Pizza before Ordering" }
        </div>
      </Form>
    </div>
  );
}

export async function action({request}){
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order = {
    ...data , 
    cart:JSON.parse(data.cart),
    priority:data.priority === 'true'
  }

  const errors = {}
  if(!isValidPhone(order.phone))

  errors.phone = "Please give us your Correct Phone Number. We might need it to contact you"
  if(Object.keys(errors).length > 0) return errors
  //if everything is okay then create order and redirect else display errors
  const newOrder = await createOrder(order)
  store.dispatch(clearCart())
  return redirect(`/order/${newOrder.id}`)
}
export default CreateOrder;
