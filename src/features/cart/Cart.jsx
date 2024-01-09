//import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getUsername } from './cartSlice';
import EmptyCart from './EmptyCart'

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector(getCart)
  const username = useSelector(getUsername)
  const dispatch = useDispatch()
if(!cart.length) return <EmptyCart />
  return (
    <div className='px-4 py-3 space-y-6 mt-4'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='text-lg uppercase font-semibold'>Your cart😍, {username}</h2>
      <ul className='divide-y divide-stone-400 border-b border-stone-400'>
        {cart.map((item) => <CartItem item={item} key={item.pizzaId}/>)}
      </ul>
      <div className='mt-6 space-x-6'>
        <Button type='primary' to="/order/new"> {username} ORDER YOUR PIZZAS</Button>
        <Button type='secondary' onClick={() => dispatch(clearCart())}>CLEAR CART</Button>
      </div>
    </div>
  );
}

export default Cart;
